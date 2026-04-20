import axios from "axios";

const api = axios.create({
  baseURL: "https://api.spaceflightnewsapi.net/v4",
  timeout: 10000,
});

export async function getArticles() {
  const res = await api.get("/articles/?limit=12");
  return res.data.results;
}

export async function getArticleById(id) {
  const res = await api.get(`/articles/${id}/`);
  return res.data;
}
