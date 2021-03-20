import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import './style.css';

const Home = () => {
  const [news, setNews] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const {
        data,
      } = await Axios(`https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=d8995801bdf548248b357e78978781b8
          `);
      setNews(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <ul>
        {news.articles &&
          news.articles.map((article) => (
            <li>
              <h1 className="title">{article.title}</h1>{' '}
              <img src={article.urlToImage} alt="" />{' '}
              <h2 className="description">{article.description}</h2>
              <hr />
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Home;