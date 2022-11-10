import axios from "axios";

//Define an API
export default axios.create({
  // baseURL: "http: localhost:3000",
  baseURL: "https://roadmap-prioritisation.herokuapp.com/", // Update before deploy to Netlify
});

const api = axios.create({
  // baseURL: "http: localhost:3000",
  baseURL: "https://roadmap-prioritisation.herokuapp.com/", // Update before deploy to Netlify
});

export const getInitiatives = async () => {
  const response = await axios.get(
    "https://roadmap-prioritisation.herokuapp.com/api/v1/initiatives/" //Update before deploy to Netlify
  );
  return response.data;
};

// Post to Estimitions table
export const createEstimation = async () => {
  const response = await axios.post(
    "https://roadmap-prioritisation.herokuapp.com/api/v1/estimations/"
  );
  return response.data;
};
