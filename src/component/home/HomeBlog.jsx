import React, { useEffect, useState } from "react";
import Heading from '../reuse/Heading'
import BlogCard from '../reuse/BlogCard';
import blog1 from "../../assets/imgs/blog/blog.png"
import { getFeaturedBlogsApi } from "../../utils/frontApi";

const HomeBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await getFeaturedBlogsApi();
      setBlogs(res.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
      <>
    {blogs.length > 0 && (
    <div className='p-70'>
        <div className="custom-container">
            <div className="row justify-content-between">
                <div className="col-lg-6">
                         <Heading
                    title="WHERE THE STREET MEETS STRATEGY"
                    subtitle="LATEST INSIGHTS"
                    titleclass="text-black"
                    />
                </div>
                <div className="col-lg-5">
                    <div className="blogpara" data-gsap>
                        <p>Explore practical thinking on media locations, campaign planning and using city movement to build stronger brand visibility.</p>
                    </div>
                </div>
            </div>
            <div className="blogcontainer">
                <div className="row">

                   {blogs.map((item, index) => {
                        return (
                            <div className="col-lg-4" data-gsap key={index}>
                            <BlogCard data={item} />
                            </div>
                        );
                        })}
                </div>
            </div>
        </div>
    </div>
   )}
    </>
);
}
export default HomeBlog