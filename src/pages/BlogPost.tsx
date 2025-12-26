import { useParams } from "react-router-dom";

const BlogPostPage = () => {
  const { slug } = useParams();

  return (
    <div style={{ padding: "4rem 2rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Blog Post</h1>
      <p>Slug: {slug}</p>
      <p>This page is wired correctly.</p>
    </div>
  );
};

export default BlogPostPage;
