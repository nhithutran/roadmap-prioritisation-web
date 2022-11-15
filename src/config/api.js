import axios from "axios";

//Define an API
export default axios.create({
  baseURL: "http://localhost:4000/",
  // baseURL: "https://roadmap-prioritisation.herokuapp.com/", // Update before deploy to Netlify
});

//public headers
const publicHeader = {
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
};

const api = axios.create({
  baseURL: "http://localhost:4000/",
  // baseURL: "https://roadmap-prioritisation.herokuapp.com/", // Update before deploy to Netlify
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
