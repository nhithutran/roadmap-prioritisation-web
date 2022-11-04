import axios from "axios";

const axiosAddress = axios.create({
  base: "http://localhost:5000",
});

export default axiosAddress;
