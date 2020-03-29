import { create } from "apisauce";

const api = create({
  baseURL: "https://thevirustracker.com",
});

const countryStats = (id) => api.get(`free-api?countryTotal=${id}`);
const countryNews = (id) => api.get(`free-api?countryNewsTotal=${id}`);
const countryTimeline = (id) => api.get(`free-api?countryTimeline=${id}`);

export { countryStats, countryNews, countryTimeline };
