import axios from "axios";
import config from "./config";

const cfg = config.load();
const {baseURL} = cfg;
//Define an API
export default axios.create({
  baseURL,
});

const api = axios.create({
  baseURL
});

export const getInitiatives = async () => {
  const response = await api.get(
    "/api/v1/initiatives/" //Update before deploy to Netlify
  );
  return response.data;
};

// update intiative to estimation
export const createEstimation = async (selectedData) => {
  const response = await api.put("/api/v1/initiatives/updatetoestimate");
  return response;
};
