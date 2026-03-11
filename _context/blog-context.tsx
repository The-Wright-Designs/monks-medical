"use client";

import { createContext, useState, useEffect } from "react";

interface PostData {
  id: any;
  slug: string;
  date: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  featured_media: {
    id: any;
  };
  author: number;
}

export const BlogDataContext = createContext<{
  data: PostData[];
  setData: React.Dispatch<React.SetStateAction<PostData[]>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
}>({
  data: [],
  setData: () => {},
  loading: false,
  setLoading: () => {},
});

export const BlogDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<PostData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://blog.monksmedical.com/wp-json/wp/v2/posts",
          {
            next: { revalidate: 604800000 },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setData(data);
        console.log("Data fetched:", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <BlogDataContext.Provider value={{ data, setData, loading, setLoading }}>
      {children}
    </BlogDataContext.Provider>
  );
};
