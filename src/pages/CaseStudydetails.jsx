import React from 'react'
import media from "../assets/imgs/breadcrumb/media.jpg"
import Breadcrumb from '../component/reuse/BreadCrumb'
import Casedata from '../component/case-study/Casedata'

const CaseStudydetails = () => {
  return (
    <div className='casedet1'>
         <Breadcrumb
  title="Case Study Detail"
  items={[
    { label: "Home", link: "/" },
    { label: "Case Study", link: "/" },
    { label: "Case Study Detail" },
  ]}
  bgimg={media}
/>
<Casedata/>


    
    </div>
  )
}

export default CaseStudydetails