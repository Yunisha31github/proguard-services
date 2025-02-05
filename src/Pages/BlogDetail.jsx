import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import blogsData from "../Data/Blogs.json";

const BlogDetail = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const decodedTitle = decodeURIComponent(title);
  const blog = blogsData.find((b) => b.title === decodedTitle);

  if (!blog) {
    return (
      <div className="container px-4 py-6 mx-auto">
        <h2 className="text-2xl font-bold text-red-700">Blog Not Found</h2>
        <p className="text-gray-700">
          The blog you are looking for does not exist.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container px-8 py-12 mx-auto">
        <h1 className="mb-4 text-3xl font-bold text-red-700">{blog.title}</h1>
        <p className="mb-4 text-sm text-gray-500">Category: {blog.category}</p>
        <img
          src={blog.image}
          alt={blog.title}
          className="w-[40%] h-[40%] object-cover mb-6 rounded-lg"
        />
        <div className="space-y-6">
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-red-700">
              English Content
            </h2>
            <p className="text-gray-700">{blog.contentEnglish}</p>
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-semibold text-red-700">
              नेपाली सामग्री
            </h2>
            <p className="text-gray-700">{blog.contentNepali}</p>
          </div>
        </div>
        <button
          onClick={() => navigate(-1)} // Navigate back to the previous page
          className="px-4 py-2 mt-6 text-white transition bg-red-700 rounded hover:bg-red-800"
        >
          Show Less
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;
