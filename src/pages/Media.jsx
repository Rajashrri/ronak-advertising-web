import React, { useEffect } from 'react'
import media from "../assets/imgs/breadcrumb/media.jpg"
import Breadcrumb from '../component/reuse/BreadCrumb'
import FeaturedMediaHighlights from '../component/media/FeaturedMediaHighlights'
import MediaCoverage from '../component/media/MediaCoverage'
import ArticlesPublished from '../component/media/ArticlesPublished'
import AboutCTA from '../component/about/AboutCTA'

const Media = () => {
    useEffect(() => {
      document.title = "Media | Ronak Advertising";
    }, []);
  return (
    <>
     <Breadcrumb
  title="Media"
  items={[
    { label: "Home", link: "/" },
    { label: "Media" },
  ]}
  bgimg={media}
/>
<FeaturedMediaHighlights/>
<MediaCoverage/>
<ArticlesPublished/>
<AboutCTA/>
    
    </>
  )
}

export default Media