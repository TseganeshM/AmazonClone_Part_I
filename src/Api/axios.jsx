import axios from "axios";

const axiosInstance = axios.create({
  //this is the loal firebase funtion
  //baseURL: "http://127.0.0.1:5001/clone-cc902/us-central1/api",
  baseURL: "https://amazon-api-deploy-2-ppk7.onrender.com",
});
export { axiosInstance };
