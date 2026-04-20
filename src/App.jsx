import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ArticleDetails from "./pages/ArticleDetails.jsx";

export default function App() {
  return (
    <div className="container">
      <div className="topbar">
        <h2 style={{ margin: 0 }}>Mini News Cards</h2>
        <Link className="btn" to="/">
          Inicio
        </Link>
      </div>

      <Routes>
        {/*
        ----------------------------------
        Definir las siguientes rutas:    
          1. Una ruta principal como raíz (/) >>> Renderiza el componente <Home />
          2. Una ruta para acceder a los detalles del 
          artículo (/article/:id) >>> Rederiza el componente <ArticleDetails />
        ---------------------------------
        Pd.: Lo que se encuentra dentro del paréntesis YA ES el nombre de la ruta a implementar
        ---------------------------------
        */}
      </Routes>
    </div>
  );
}
