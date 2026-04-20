import React from "react";
import { Link } from "react-router-dom";

function clip(text, max = 120) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max).trimEnd() + "…" : text;
}

export default function ArticleCard({ article }) {
  return (
    <div className="card">
      <img className="thumb" src={article.image_url} alt={article.title} />
      <div className="cardBody">
        <p className="title">{article.title}</p>
        <p className="desc">{clip(article.summary, 140)}</p>
        <Link className="btn" to={`/article/${article.id}`}>
          Ver más
        </Link>
      </div>
    </div>
  );
}
