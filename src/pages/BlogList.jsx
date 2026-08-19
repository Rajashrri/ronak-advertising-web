import React, { useEffect } from 'react'
import Breadcrumb from '../component/reuse/BreadCrumb'
import Listing from '../component/blog/Listing'
import blogimg from "../assets/imgs/breadcrumb/blog.jpg"

const BlogList = () => {
    useEffect(() => {
      document.title = "Blog | Ronak Advertising";
    }, []);

  return (
    <>
      <Breadcrumb
  title="Blog"
  items={[
    { label: "Home", link: "/" },
    { label: "Blog" },
  ]}
  bgimg={blogimg}
/>
<Listing/>

    
    </>
  )
}

export default BlogList