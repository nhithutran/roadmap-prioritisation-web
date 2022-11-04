import axios from "axios";

export const axiosInstance = ()=>{console.log('inside'); return axios.create({
  base: "http://localhost:5000",
});
}
