import React from 'react'
import Heading from '../reuse/Heading';
import MediaCard from '../reuse/MediaCard';
import blog1 from "../../assets/imgs/blog/blog.png"

const ArticlesPublished = () => {
   const blogs = [
          {
            id: 1,
            image: blog1,
            date: "May 19, 2023",
             discription:"Web design is a powerful tool across many professions,",
            author: "Mesbah",
            comments: 'Media Coverage',
            title: "Create  Innovate  Inspire  and bring your brand to life",
            button: "Read More",
          },
          {
            id: 2,
            image: blog1,
            date: "May 19, 2023",
             discription:"Web design is a powerful tool across many professions,",
            author: "Mesbah",
            comments: "Media Coverage",
            title: "Create  Innovate  Inspire  and bring your brand to life",
            button: "Read More",
          },  {
            id: 1,
            image: blog1,
            date: "May 19, 2023",
             discription:"Web design is a powerful tool across many professions,",
            author: "Mesbah",
            comments: 'Media Coverage',
            title: "Create  Innovate  Inspire  and bring your brand to life",
            button: "Read More",
          },
          {
            id: 2,
            image: blog1,
            date: "May 19, 2023",
             discription:"Web design is a powerful tool across many professions,",
            author: "Mesbah",
            comments: "Media Coverage",
            title: "Create  Innovate  Inspire  and bring your brand to life",
            button: "Read More",
          },
            {
            id: 1,
            image: blog1,
            date: "May 19, 2023",
             discription:"Web design is a powerful tool across many professions,",
            author: "Mesbah",
            comments: 'Media Coverage',
            title: "Create  Innovate  Inspire  and bring your brand to life",
            button: "Read More",
          },
          {
            id: 2,
            image: blog1,
            date: "May 19, 2023",
            discription:"Web design is a powerful tool across many professions,",
            author: "Mesbah",
            comments: "Media Coverage",
            title: "Create  Innovate  Inspire  and bring your brand to life",
            button: "Read More",
          },
        ];
  return (
     <div className='p-70 media'>
        <div className="custom-container">
              <Heading
                                title="Articles Published"
                                // subtitle="Socials"
                                titleclass="text-black"
                            />

                                <div className="row mt-4">

                   {blogs.map((item, index) => {
                        return (
                            <div className="col-lg-4 col-lg-6" data-gsap key={index}>
                            <MediaCard data={item} />
                            </div>
                        );
                        })}
                </div>
        </div>
    </div>
  )
}

export default ArticlesPublished