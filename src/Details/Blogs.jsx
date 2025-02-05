import React from "react";
import blogsData from "../Data/Blogs.json"; 

const BlogCard = ({ blog }) => {
  return (
    <div className="overflow-hidden bg-white rounded-lg shadow-lg">
      <img
        src={blog.image}
        alt={blog.title}
        className="object-cover w-full h-48"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold text-red-700">{blog.title}</h2>
        <p className="mb-2 text-sm text-gray-500">Category: {blog.category}</p>
        <p className="mb-2 text-sm text-gray-700">
          {blog.contentEnglish.substring(0, 100)}...
        </p>
        <button className="px-4 py-2 text-sm text-white transition bg-red-700 rounded hover:bg-red-800">
          Read More
        </button>
      </div>
    </div>
  );
};

const BlogsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container px-4 py-8 mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-red-700">Our Blogs</h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogsData.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
