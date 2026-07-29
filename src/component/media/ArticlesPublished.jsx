import React, { useEffect, useState } from "react";
import Heading from "../reuse/Heading";
import MediaCard from "../reuse/MediaCard";
import { getArticlesApi } from "../../utils/frontApi";

const ArticlesPublished = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    try {
      const res = await getArticlesApi();

      if (res.data.success) {
        setArticles(res.data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-70 media">
      <div className="custom-container">
        <Heading
          title="Articles Published"
          // subtitle="Socials"
          titleclass="text-black"
        />

        <div className="row mt-4">
          {articles.map((item, index) => {
            return (
              <div className="col-lg-4 col-lg-6" data-gsap key={index}>
                <MediaCard
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
                    comments: "Articles",
                    title: item.name,
                    discription: item.briefIntro,
                    link: item.articleLink,
                    button: true,
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

export default ArticlesPublished;
