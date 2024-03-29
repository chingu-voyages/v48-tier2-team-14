import React, { useEffect, useState, useContext } from "react";
import { AppContext } from '../context/Context'
import { getDinoNews } from "../global/utils";

export default function DinosaurNews() {
  const { dinoNews } = useContext(AppContext);
  // const [dinoNews, setDinoNews] = useState(null);
  const [viewAll, setViewAll] = useState(false);
  const [btnText, setBtnText] = useState("View all");

  // useEffect(() => {
  //   const fetchDinoNews = async () => {
  //     try {
  //       const data = await getDinoNews();
  //       console.log(data);
  //       setDinoNews(data.articles);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchDinoNews();
  // }, []);

  return (
    <div className="news-container">
      <h2 className="news-heading">Latest News</h2>
      <p className="news-intro">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed inventore
        perspiciatis quasi! Alias laudantium modi veritatis expedita vel,
        reiciendis, numquam non beatae debitis dolores voluptatibus voluptatem
        fuga quae? Tenetur, aspernatur.
      </p>
      <div className="articles">
        {dinoNews &&
          dinoNews
            .slice(0, viewAll ? dinoNews.length : 3)
            .map((article, index) => {
              const publishedAt = new Date(article.publishedAt);
              const options = {
                year: "numeric",
                month: "long",
                day: "numeric",
              };

              const formattedDate = publishedAt.toLocaleString(
                "en-GB",
                options
              );

              return (
                <div className="news-card" key={index}>
                  <div className="card-img-container">
                    <img
                      className="article-img"
                      loading="lazy"
                      src={article.image}
                      alt={article.title}
                    />
                  </div>
                  <div className="card-text-container">
                    <div className="source-container">
                      <p className="article-published">{formattedDate}</p>
                      <p className="article-source">By {article.source.name}</p>
                    </div>
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-description">{article.description}</p>
                    <div className="article-link-container">
                      <a
                        className="article-link"
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                      <i className="bi bi-chevron-right"></i>
                    </div>
                  </div>
                </div>
              );
            })}
      </div>
      <button
        onClick={() => {
          if (!viewAll) {
            setViewAll(true);
            setBtnText("Close");
          } else {
            setViewAll(false);
            setBtnText("View all");
          }
        }}
        className="view-all"
      >
        {btnText}
      </button>
    </div>
  );
}
