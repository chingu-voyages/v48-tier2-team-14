import React, { useState, useContext } from "react";
import { AppContext } from "../context/Context";

export default function DinosaurNews() {
  const { dinoNews } = useContext(AppContext);
  const [viewAll, setViewAll] = useState(false);
  const [btnText, setBtnText] = useState("View all");

  return (
		<div className="news-container mt-5">
			<div id="styled-container">
				<h2 className="news-heading mt-4">Latest News</h2>
				<p className="news-intro mb-4 text-center">
					Stay up to date with exciting discoveries, scientific breakthroughs,
					and fascinating insights into these prehistoric creatures.
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
										<div className="card-text-container bg-white">
											<div className="source-container">
												<p className="article-published">{formattedDate}</p>
												<p className="article-source">
													By {article.source.name}
												</p>
											</div>
											<h3 className="article-title">{article.title}</h3>
											<p className="article-description">
												{article.description}
											</p>
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
		</div>
	);
}
