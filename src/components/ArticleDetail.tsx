import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Article } from '../interfaces/Article';

const ArticleDetail: React.FC = () => {
  const [article, setArticle] = useState<Article | null>(null);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    fetch(`https://api.spaceflightnewsapi.net/v4/articles/${id}`)
      .then(response => response.json())
      .then(data => setArticle(data))
      .catch(error => console.error("Fetching article details failed", error));
  }, [id]);

  if (!article) return <div>Loading...</div>;

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.imageUrl} alt={article.title} />
      <p>{article.summary}</p>
     
    </div>
  );
};

export default ArticleDetail;