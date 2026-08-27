import React, { useEffect, useState } from "react";
import BlogCard from "../reuse/BlogCard";
import { getBlogsApi } from "../../utils/frontApi";
import { useSearchParams } from "react-router-dom";
const Listing = () => {
  useEffect(() => {
    document.title = "Blogs | Ronak Advertising";
  }, []);

  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 6;
  useEffect(() => {
    fetchBlogs();

    setCurrentPage(1);
  }, [category]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await getBlogsApi(category);

      if (res.data.success) {
        setBlogs(res.data.data);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const filteredBlogs = category
    ? blogs.filter((blog) => blog.categoryId?.slug === category)
    : blogs;
  // Pagination
  const indexOfLast = currentPage * blogsPerPage;
  const indexOfFirst = indexOfLast - blogsPerPage;

  const currentBlogs = filteredBlogs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  return (
    <div className="p-70">
      <div className="custom-container blogcontainer">
        <div className="row">
          {loading ? (
            <div className="case-study-loader">
              <div className="spinner"></div>
            </div>
          ) : currentBlogs.length > 0 ? (
            currentBlogs.map((item) => (
              <div className="col-lg-4 mb-4" key={item._id}>
                <BlogCard data={item} />
              </div>
            ))
          ) : (
            <div className="text-center py-5">No Blogs Found</div>
          )}
        </div>

        {totalPages > 1 && (
          <div className="pagination">
            <ul>
              {/* Previous */}
              <li>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage > 1) setCurrentPage(currentPage - 1);
                  }}
                >
                  Prev
                </a>
              </li>

              {/* Page Numbers */}
              {[...Array(totalPages)].map((_, index) => (
                <li key={index}>
                  <a
                    href="#!"
                    className={currentPage === index + 1 ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage(index + 1);
                    }}
                  >
                    {(index + 1).toString().padStart(2, "0")}
                  </a>
                </li>
              ))}

              {/* Next */}
              <li>
                <a
                  href="#!"
                  onClick={(e) => {
                    e.preventDefault();
                    if (currentPage < totalPages)
                      setCurrentPage(currentPage + 1);
                  }}
                >
                  <svg width="15" height="13" viewBox="0 0 15 13" fill="none">
                    <path
                      d="M14.543 7.23828L9.23047 12.5508C8.83203 12.9824 8.13477 12.9824 7.73633 12.5508C7.30469 12.1523 7.30469 11.4551 7.73633 11.0566L11.2227 7.53711H1.0625C0.464844 7.53711 0 7.07227 0 6.47461C0 5.91016 0.464844 5.41211 1.0625 5.41211H11.2227L7.73633 1.92578C7.30469 1.52734 7.30469 0.830078 7.73633 0.431641C8.13477 0 8.83203 0 9.23047 0.431641L14.543 5.74414C14.9746 6.14258 14.9746 6.83984 14.543 7.23828Z"
                      fill="black"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Listing;
