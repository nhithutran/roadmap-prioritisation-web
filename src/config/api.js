import axios from "axios";

//Define an API
export default axios.create({
  baseURL: "http://localhost:4000/",
});

const api = axios.create({
  baseURL: "http://localhost:4000/",
});

export const getInitiatives = async () => {
  const response = await axios.get("http://localhost:4000/api/v1/initiatives/");
  return response.data;
};
