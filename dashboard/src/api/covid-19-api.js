import { create } from "apisauce";

const api = create({
  baseURL: "https://covid19.mathdro.id/api",
});

const confirmed = api.get("/confirmed");
const recovered = api.get("/recovered");
const deaths = api.get("/deaths");

const daily = api.get("/daily");
const dailyDate = (date) => api.get(`/daily/${date}`);

const countries = api.get("/countries");
const country = (value) => api.get(`/countries/${value}`);

const countryConfirmed = (value) => api.get(`/countries/${value}/confirmed`);
const countryRecovered = (value) => api.get(`/countries/${value}/recovered`);
const countryDeaths = (value) => api.get(`/countries/${value}/deaths`);

export {
  confirmed,
  recovered,
  deaths,
  daily,
  dailyDate,
  countries,
  country,
  countryConfirmed,
  countryRecovered,
  countryDeaths,
};
