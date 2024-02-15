
import React from 'react';
import { Article } from '../interfaces/Article';

interface ArticleComponentProps {
  article: Article;
}

const ArticleComponent: React.FC<ArticleComponentProps> = ({ article }) => {
  return (
    <div>
      <h2>{article.title}</h2>
      <img src={article.imageUrl} alt={article.title} style={{ width: "100%" }} />
      <p>{new Date(article.publishedAt).toLocaleDateString()}</p>
      <p>{article.summary}</p>
    </div>
  );
};

export default ArticleComponent;
