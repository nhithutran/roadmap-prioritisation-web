import axios from "axios";
import config from "./config";

const cfg = config.load();
const { baseURL } = cfg;
//Define an API
export default axios.create({
  baseURL,
});

export const privateHeaders = (authToken) => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
    withCredentials: false,
  }
};

//public headers
export const publicHeaders = {
  headers: { "Content-Type": "application/json" },
  withCredentials: false,
};

const api = axios.create({
  baseURL: "http://localhost:4000/",
  //baseURL: "https://roadmap-prioritisation.herokuapp.com/", // Update before deploy to Netlify
});

export const fetchInitiatives = async (authToken) => {
  const res = await axios.get("api/v1/initiatives/", privateHeaders(authToken));
  const resData = res.data.data;
  // console.log(resData)
  return resData
}

// update intiative to estimation
export const createEstimation = async (selectedData) => {
  const response = await api.put("/api/v1/initiatives/updatetoestimate");
  return response;
};
