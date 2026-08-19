import React, { useEffect, useState } from "react";
import Heading from "../reuse/Heading";
import blog1 from "../../assets/imgs/blog/blog.png";
import MediaCard2 from "../reuse/MediaCard2";
import { getFeaturedMediaApi } from "../../utils/frontApi";

const FeaturedMediaHighlights = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchFeaturedMedia();
  }, []);

  const fetchFeaturedMedia = async () => {
    try {
      const res = await getFeaturedMediaApi();

      if (res.data.success) {
        setBlogs(res.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch featured media:", error);
    }
  };
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
              <div className="col-lg-4" data-gsap key={index}>
                <MediaCard2
                  data={{
                    image: item.image,
                    date: new Date(item.publishedDate).toLocaleDateString(
                      "en-US",
                      {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      },
                    ),
                    author: item.sourceName,
                    comments: "Media Coverage",
                    title: item.name,
                    description: item.description,
                    link: item.link,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FeaturedMediaHighlights;
