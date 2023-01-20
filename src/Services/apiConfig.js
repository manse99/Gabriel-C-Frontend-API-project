import axios from "axios";

let apiUrl;

const apiUrls = {
  production: "https://api-project-production-0e39.up.railway.app",
  development: "https://api-project-production-0e39.up.railway.app/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;