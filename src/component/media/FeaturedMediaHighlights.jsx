import React from "react";
import Heading from "../reuse/Heading";
import blog1 from "../../assets/imgs/blog/blog.png";
import MediaCard from "../reuse/MediaCard";

const FeaturedMediaHighlights = () => {
  const blogs = [
    {
      id: 1,
      image: blog1,
      date: "May 19, 2023",
      author: "Mesbah",
      comments: "Media Coverage",
      title:
        "Innovate and inspire daily to bring your brand to life with fresh, creative ideas that captivate and engage your audience.",
    },
    {
      id: 2,
      image: blog1,
      date: "May 19, 2023",
      author: "Mesbah",
      comments: "Media Coverage",
      title:
        "Innovate and inspire daily to bring your brand to life with fresh, creative ideas that captivate and engage your audience.",
    },
  ];
  return (
    <div className="p-70 media">
      <div className="custom-container">
        <Heading
          title="Featured Media Highlights"
          // subtitle="Socials"
          titleclass="text-black"
        />

        <div className="row mt-4">
          {blogs.map((item, index) => {
            return (
              <div className="col-lg-6" data-gsap key={index}>
                <MediaCard data={item} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMediaHighlights;
