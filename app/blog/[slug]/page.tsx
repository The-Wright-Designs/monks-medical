import { notFound } from "next/navigation";
import Image from "next/image";
import parse, { domToReact } from "html-react-parser";
import type { Metadata } from "next";

import Button from "@/_components/button";

const WP_API = "https://blog.monksmedical.com/wp-json/wp/v2";

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  featured_media: number;
}

const fetchPost = async (slug: string): Promise<Post | null> => {
  const res = await fetch(`${WP_API}/posts?slug=${slug}`, {
    next: { revalidate: 3600 },
  });
  const posts: Post[] = await res.json();
  return posts[0] ?? null;
};

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
  const { slug } = await params;
  const post = await fetchPost(slug);
  if (!post) return {};
  return {
    title: `${post.title.rendered} | Monk's Medical`,
    description: post.excerpt.rendered.replace(/<[^>]+>/g, "").trim(),
  };
};

const transform = (node: any) => {
  const headingTags = ["h1", "h2", "h3", "h4", "h5", "h6"];
  if (node.type === "tag" && headingTags.includes(node.name)) {
    return <h2 className="text-subheading">{domToReact(node.children)}</h2>;
  }
  if (node.type === "tag" && node.name === "ol") {
    return (
      <ol className="list-decimal text-left pl-8 text-paragraph">
        {domToReact(node.children)}
      </ol>
    );
  }
  if (node.type === "tag" && node.name === "ul") {
    return (
      <ul className="list-disc text-left text-paragraph pl-8">
        {domToReact(node.children)}
      </ul>
    );
  }
  if (node.type === "tag" && node.name === "p") {
    return <p className="text-paragraph">{domToReact(node.children)}</p>;
  }
  if (node.type === "tag" && node.name === "blockquote") {
    return (
      <blockquote className="p-4 bg-lightBrown/25 italic text-center grid gap-2">
        {domToReact(node.children)}
      </blockquote>
    );
  }
};

const BlogPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = await fetchPost(slug);

  if (!post) notFound();

  const [authorData, mediaData] = await Promise.all([
    fetch(`${WP_API}/users/${post.author}`, {
      next: { revalidate: 3600 },
    }).then((r) => r.json()),
    post.featured_media
      ? fetch(`${WP_API}/media/${post.featured_media}`, {
          next: { revalidate: 3600 },
        }).then((r) => r.json())
      : null,
  ]);

  return (
    <main className="mt-20 grid gap-10">
      <div>
        <h1 className="mb-2">{post.title.rendered}</h1>
        <h2 className="text-paragraph">
          By: {authorData?.name?.replace("and", "&")}
        </h2>
      </div>
      {mediaData?.source_url && (
        <Image
          src={mediaData.source_url}
          alt={post.title.rendered}
          width={200}
          height={200}
          className="object-cover aspect-video desktop:max-h-[500px]"
        />
      )}
      <div className="grid gap-5">
        {parse(post.content.rendered, { replace: transform })}
      </div>
      <Button
        cssClasses="desktop:mr-auto"
        link="/blog"
        ariaLabel="Back to Blog Page"
      >
        Back
      </Button>
    </main>
  );
};

export default BlogPage;
