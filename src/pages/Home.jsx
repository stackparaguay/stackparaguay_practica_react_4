import React from "react";
import { getArticles } from "../services/api.js";
import ArticleCard from "../components/ArticleCard.jsx";

export default function Home() {
  const [articles, setArticles] = React.useState([]);

  React.useEffect(() => {
    // Implementar la funcion getArticles() y
    // actualizar los datos del arreglo de articulos
  }, []);

  return (
    <div>
      <p className="muted" style={{ marginTop: 0 }}>
        Listado simple (12 artículos) traídos desde la API.
      </p>

      <div className="grid">
        {/*Mapear y Renderizar el arreglo de articulos*/}
      </div>
    </div>
  );
}
