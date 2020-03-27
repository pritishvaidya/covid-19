import { create } from "apisauce";

const api = create({
  baseURL: "https://coronavirus-tracker-api.herokuapp.com/v2",
});

const sources = () => api.get("/sources");

const latest = () => api.get("/latest");

const locations = () => api.get("/locations");
const locationById = (id) => api.get(`/locations/${id}`);

const locationsByCountryCode = (code) =>
  api.get(`/locations?country_code=${code}`);
const locationsBySource = (code) => api.get(`/locations?source=${code}`);
const locationsByTimelines = (code) => api.get(`/locations?timelines=${code}`);

export {
  sources,
  latest,
  locations,
  locationById,
  locationsByCountryCode,
  locationsBySource,
  locationsByTimelines,
};
