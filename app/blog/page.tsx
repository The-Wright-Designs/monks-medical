import Image from "next/image";
import parse, { domToReact } from "html-react-parser";
import classNames from "classnames";

import Button from "../../_components/button";

const WP_API = "https://blog.monksmedical.com/wp-json/wp/v2";

interface Post {
  id: number;
  slug: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  author: number;
  featured_media: number;
}

const transform = (node: any) => {
  if (node.type === "tag" && node.name === "p") {
    return <p className="desktop:text-left">{domToReact(node.children)}</p>;
  }
};

const Blog = async () => {
  const postsRes = await fetch(`${WP_API}/posts`, {
    next: { revalidate: 3600 },
  });
  const posts: Post[] = await postsRes.json();

  const [mediaMap, authorMap] = await Promise.all([
    Promise.all(
      posts
        .filter((p) => p.featured_media)
        .map((p) =>
          fetch(`${WP_API}/media/${p.featured_media}`, {
            next: { revalidate: 3600 },
          })
            .then((r) => r.json())
            .then((m) => [p.id, m.source_url] as [number, string]),
        ),
    ).then((entries) => Object.fromEntries(entries)),
    Promise.all(
      [...new Set(posts.map((p) => p.author))].map((authorId) =>
        fetch(`${WP_API}/users/${authorId}`, {
          next: { revalidate: 3600 },
        })
          .then((r) => r.json())
          .then((a) => [authorId, a.name] as [number, string]),
      ),
    ).then((entries) => Object.fromEntries(entries)),
  ]);

  return (
    <main className="mt-20">
      <h1 className="mb-15">Blog</h1>
      <ul>
        {posts.map(
          ({ id, title, author, excerpt, slug, featured_media }, index) => (
            <li
              key={id}
              className={classNames("grid gap-10", {
                "border-b-[1px] border-black/25 pb-15 mb-15":
                  index !== posts.length - 1,
                "desktop:grid-cols-2": featured_media,
              })}
            >
              {featured_media && mediaMap[id] ? (
                <Image
                  src={mediaMap[id]}
                  alt={title.rendered}
                  width={200}
                  height={200}
                  className="object-cover aspect-video desktop:max-h-[300px]"
                />
              ) : (
                <div className="aspect-video w-full h-full bg-brown/50 drop-shadow-default rounded-lg desktop:aspect-auto" />
              )}
              <div className="flex flex-col gap-5">
                <h2 className="text-subheading desktop:text-left">
                  {title.rendered}
                </h2>
                {parse(excerpt.rendered, { replace: transform })}
                <h3 className="text-paragraph">
                  By: {authorMap[author]?.replace("and", "&")}
                </h3>
                <Button
                  ariaLabel="Read more"
                  link={`/blog/${slug}`}
                  cssClasses="hidden desktop:block desktop:mr-auto desktop:mt-auto"
                >
                  Read More
                </Button>
              </div>
              <Button
                ariaLabel="Read more"
                link={`/blog/${slug}`}
                cssClasses="order-last desktop:hidden"
              >
                Read More
              </Button>
            </li>
          ),
        )}
      </ul>
    </main>
  );
};

export default Blog;
