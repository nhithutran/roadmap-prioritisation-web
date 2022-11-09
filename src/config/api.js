import axios from "axios";

//Define an API
export default axios.create({
  baseURL: "https://roadmap-prioritisation.herokuapp.com/",
});

const api = axios.create({
  baseURL: "https://roadmap-prioritisation.herokuapp.com/",
});

export const getInitiatives = async () => {
  const response = await axios.get(
    "https://roadmap-prioritisation.herokuapp.com/api/v1/initiatives/"
  );
  return response.data;
};
