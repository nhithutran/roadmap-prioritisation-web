import { modalUnstyledClasses } from "@mui/material";

const production = {
  // baseURL: "https://roadmap-prioritisation.herokuapp.com/", // Update before deploy to Netlify
  baseURL: "http://localhost:4000/",
};

const development = {
  // baseURL: "https://roadmap-prioritisation.herokuapp.com/",
  baseURL: "http://localhost:4000/",
};

const config = {
  production,
  development,
};

const load = () => {
  if (process.env.NODE_ENV == "development") {
    return config.development;
  }
  return config.production;
};

export default { load };
