const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="max-w-[1100px] mx-7 min-[1156px]:mx-auto">{children}</div>
  );
};

export default BlogLayout;
