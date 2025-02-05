import React, { useState } from "react";
import blogsData from "../Data/Blogs.json";
import BlogCard from "../Details/BlogCard";

const BlogsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [...new Set(blogsData.map((blog) => blog.category))];

  const filteredBlogs = selectedCategory
    ? blogsData.filter((blog) => blog.category === selectedCategory)
    : blogsData;

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container px-10 py-8 mx-auto">
        <h1 className="mb-6 text-4xl font-bold text-red-700">Our Blogs</h1>
        <div className="flex flex-wrap gap-8">
          {/* Categories Section */}
          <div className="flex-shrink-0 w-full p-4 bg-yellow-100 rounded-lg shadow-lg md:w-1/4">
            <h2 className="mb-4 text-xl font-semibold text-red-700">
              Blog Categories
            </h2>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index}>
                  <button
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category ? "" : category
                      )
                    }
                    className={`text-gray-700 hover:text-red-700 transition ${
                      selectedCategory === category ? "font-bold" : ""
                    }`}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Blog Posts Section */}
          <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBlogs.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
            {filteredBlogs.length === 0 && (
              <p className="text-gray-700">
                No blogs available for the selected category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
