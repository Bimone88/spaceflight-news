import React, { useState, useEffect } from 'react';
import ArticleComponent from './ArticleComponent';
import { Article } from '../interfaces/Article';

const HomePage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles')
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error("Fetching articles failed", error));
  }, []);

  return (
    <div>
      {articles.map(article => (
        <ArticleComponent key={article.id} article={article} />
      ))}
    </div>
  );
};

export default HomePage;