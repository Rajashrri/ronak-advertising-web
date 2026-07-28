import React from 'react'
import Breadcrumb from '../component/reuse/BreadCrumb'
import Listing from '../component/blog/Listing'
import blogimg from "../assets/imgs/breadcrumb/blog.jpg"

const BlogList = () => {
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