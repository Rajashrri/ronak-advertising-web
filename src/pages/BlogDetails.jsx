import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Breadcrumb from '../component/reuse/BreadCrumb'
import Listing from '../component/blog/Listing'
import blogimg from "../assets/imgs/breadcrumb/blog-details.jpg"
import Details from '../component/blog/Details'
import { getBlogDetailsApi } from "../utils/frontApi";

const BlogDetails = () => {

   const { slug } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await getBlogDetailsApi(slug);
        setBlog(res.data.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchBlog();
  }, [slug]);

  return (
    <>
      <Breadcrumb
   title={blog?.title || "Blog Details"}
  items={[
    { label: "Home", link: "/" },
    { label: "Blog", link: "/blogs" },
      { label: blog?.title || "Blog Details" },
  ]}
  bgimg={blogimg}
/>
<Details/>

    
    </>
  )
}

export default BlogDetails