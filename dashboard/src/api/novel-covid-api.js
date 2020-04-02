/**
 * https://corona.lmao.ninja/
 * */

import { create } from "apisauce";

const api = create({
  baseURL: "https://corona.lmao.ninja",
});

const all = () => api.get(`all`);

export { all };
