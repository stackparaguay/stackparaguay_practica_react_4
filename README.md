# Mini News Cards

Proyecto final Introducción al Desarrollo Web I: Listado en cards + Detalle por ruta usando React Router.

## Tecnologías

- React + Vite
- React Router
- Axios

## API

- Spaceflight News API (sin key)
- Base: `https://api.spaceflightnewsapi.net/v4`

## Ejecutar

```bash
npm install
npm run dev
```

## Estructura

- `src/pages/Home.jsx` (listado)
- `src/pages/ArticleDetails.jsx` (detalle)
- `src/services/api.js` (requests)
- `src/components/ArticleCard.jsx` (card)

## Método de resolución (paso a paso)

1. Clonar el repositorio:
   - `git clone https://github.com/stackparaguay/stackparaguay_practica_react_4.git`
2. Instalar dependencias:
   - `npm install`
3. Acceder al fichero `/src/`
4. Crear rutas en el componente `App.jsx`
   - `/` (listado)
   - `/article/:id` (detalle)
   - `*` (not found) opcional
5. Acceder al fichero `/pages/`
6. Listar las noticias en el componente `Home.jsx`:
   - Implementar la funcion `getArticles()`
   - Mapear y Renderizar el arreglo de articulos
7. Mostrar el detalle de la noticia en el componente `ArticleDetails.jsx`:
   - Implementar la funcion `getArticleById(id)`
   - Renderizar los datos del artículo (imagen, título, descripción, fecha de publicación)
8. Manejar estados:
   - `loading`
9. Probar:
   - Abrir home
   - Abrir detalle
   - Recargar en detalle directo (debe funcionar igual)
10. Subir a GitHub:
    - repo público
    - README con instrucciones

---

## Entrega (obligatoria)

1. Crear un repositorio en GitHub con nombre:
   - `mini-news-reader`
2. Subir el código completo al repo.
3. En Moodle, entregar:
   - **link del repositorio** (público)
   - (opcional) link de deploy (Netlify/Vercel)

**El repositorio debe incluir un README con:**

- Descripción del proyecto
- Tecnologías
- Cómo instalar y ejecutar
- Autor

Ejemplo:

## Autor

- Nombre: TU NOMBRE
