import React, { useEffect, useState } from "react";
import Heading from "../reuse/Heading";
import MediaCard2 from "../reuse/MediaCard2";
import { getMediaCoverageApi } from "../../utils/frontApi";

const MediaCoverage = () => {
  const [media, setMedia] = useState([]);

  useEffect(() => {
    fetchMediaCoverage();
  }, []);

  const fetchMediaCoverage = async () => {
    try {
      const res = await getMediaCoverageApi();

      if (res.data.success) {
        setMedia(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-70 media white-container">
      <div className="custom-container ">
        <Heading
          title="Media Coverage"
          // subtitle="Socials"
          titleclass="text-black"
        />

        <div className="row mt-4">
          {media.map((item, index) => {
            return (
              <div className="col-lg-4 col-md-6" data-gsap key={index}>
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

export default MediaCoverage;
