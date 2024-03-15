import { useEffect, useState } from "react";
import { getDinoNews } from "../global/utils";

export default function DinosaurNews() {
  const [dinoNews, setDinoNews] = useState(null);

  useEffect(() => {
    const fetchDinoNews = async () => {
      try {
        const data = await getDinoNews();
        console.log(data);
        setDinoNews(data.articles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDinoNews();
  }, []);

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
          dinoNews.map((article, index) => (
            <div className="news-card" key={index}>
              <img
                className="article-img"
                loading="lazy"
                src={article.image}
                alt={article.title}
              />
              <h3 className="article-title">{article.title}</h3>
              <p className="article-description">{article.description}</p>
              <a className="article-link" href={article.url}>
                Read More
              </a>
            </div>
          ))}
      </div>
    </div>
  );
}
