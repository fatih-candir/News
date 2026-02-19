import React, { useState } from "react";
import { useEffect } from "react";
import NewsItem from "./NewsItem";
import axios from "axios";

function NewsBoard() {
  const [articles, setArticles] = useState([]);

  useEffect(async () => {
    let url = `https://newsdata.io/api/1/latest?apikey=${import.meta.env.VITE_API_KEY}&country=tr
  &excludelanguage=tr`;

    await fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.results))
      .catch((error) => data.error);
  }, []);

  // console.log(articles);

  return (
    <div>
      <h2 className="text-center mt-3">
        En Yeni <span className="badge bg-danger">Haberler</span>
      </h2>
      {articles.map((news, index) => {
        return (
          <NewsItem
            key={index}
            title={news.title}
            description={news.description}
            src={news.image_url}
            url={news.link}
          />
        );
      })}
    </div>
  );
}
export default NewsBoard;
