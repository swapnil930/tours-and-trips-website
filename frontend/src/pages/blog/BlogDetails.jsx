import { useParams } from "react-router-dom";
import blogs from "../../jsonData/blogs";
import Hero from "../../components/common/hero/Hero";

const BlogDetails = () => {
  const { id } = useParams();

  const blog = blogs.find((b) => String(b.id) === id);

  if (!blog) {
    return <h2 className="text-center mt-10">Blog not found 😢</h2>;
  }

  return (
    <>
    <Hero/>
    <div className="max-w-4xl mx-auto px-4 py-10">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-96 object-cover rounded-lg"
      />

      <p className="text-sm text-gray-500 mt-4">{blog.date}</p>

      <h1 className="text-3xl font-bold mt-2">{blog.title}</h1>

      {blog.author && (
        <p className="text-gray-600 mt-1">By {blog.author}</p>
      )}

      {/* Short blogs */}
      {blog.description && (
        <p className="mt-6 text-gray-700 text-lg">
          {blog.description}
        </p>
      )}

      {/* Long blogs (Markdown-style content) */}
      {blog.content && (
        <div className="mt-6 text-gray-700 leading-relaxed whitespace-pre-line">
          {blog.content}
        </div>
      )}
    </div>
    </>
  );
};

export default BlogDetails;
