import React from 'react';
import { Link } from 'react-router-dom';
import { JournalArticleItem } from '../../types';

export const ArticleCard: React.FC<{ article: JournalArticleItem }> = ({ article }) => {
  return (
    <article className="journal-card">
      <div className="journal-card-meta">
        <span className="journal-card-tag">{article.category}</span>
        <span>•</span>
        <span>{article.readTime}</span>
      </div>

      <h3 className="journal-card-title">
        <Link to={`/journal/${article.slug}`}>
          {article.title}
        </Link>
      </h3>

      <p className="journal-card-summary">{article.summary}</p>

      <div>
        <Link to={`/journal/${article.slug}`} className="editorial-link">
          <span>Read guide</span>
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </article>
  );
};
