/**
 * https://corona.lmao.ninja/
 * */

import { create } from "apisauce";

const api = create({
  baseURL: "https://corona.lmao.ninja",
});

const all = () => api.get(`all`);
const timelines = () => api.get(`/v2/historical/all`);
const countries = () => api.get(`countries`);

export { all, timelines, countries };
