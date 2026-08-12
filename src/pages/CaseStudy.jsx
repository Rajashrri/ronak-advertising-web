import React from 'react'
import Breadcrumb from '../component/reuse/BreadCrumb'
import media from "../assets/imgs/breadcrumb/casestudy.jpg"
import CaseList from '../component/case-study/CaseList'

const CaseStudy = () => {
  return (
    <>
         <Breadcrumb
  title="Case Study"
  items={[
    { label: "Home", link: "/" },
    { label: "Case Study" },
  ]}
  bgimg={media}
/>
<CaseList/>
    
    </>
  )
}

export default CaseStudy