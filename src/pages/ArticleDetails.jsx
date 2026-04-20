import React from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../services/api.js";

export default function ArticleDetails() {
  const { id } = useParams();
  const [article, setArticle] = React.useState(null);

  React.useEffect(() => {
    // Implementar la funcion getArticleById(id) y
    // actualizar los datos del estado article
  }, []);

  if (!article) {
    return (
      <p className="muted">
        {/*Renderizar un mensaje de carga en caso de que aún no se carguen los datos
    del artículo seleccionado */}
      </p>
    );
  }

  return (
    <div>
      <img className="detailImg" src={article.image_url} alt={article.title} />
      <h3>{/*Renderizar el título del artículo */}</h3>
      <p className="muted">
        {/*Renderizar la fecha de publicación artículo */}
      </p>
      <p>{/*Renderizar el resumen del artículo */}</p>
      <a className="btn" href={article.url} target="_blank" rel="noreferrer">
        Ver fuente
      </a>
    </div>
  );
}
