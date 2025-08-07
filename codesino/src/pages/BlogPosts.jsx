import { Link } from "react-router-dom";
import BlogPostDetail from "../components/Blog/BlogPostDetail";

const BlogPosts = () => {
  return (
    <div className="max-w-3xl mt-8 mx-auto">
      <BlogPostDetail />

      <div className="mt-8 mb-8 text-center">
        <Link to="/blog" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300">
          ← Go Back
        </Link>
      </div>
    </div>
  );
}

export default BlogPosts;
