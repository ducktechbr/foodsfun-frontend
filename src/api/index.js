import axios from "axios";

const apiURL = {
  development: "https://foods-fan-app.herokuapp.com/",
  production: "https://foods-fan-app.herokuapp.com/",
};

const api = axios.create({
  baseURL: apiURL[process.env.NODE_ENV],
});

api.interceptors.request.use((config) => {
  const json = localStorage.getItem("loggedInUser");
  const loggedInUser = JSON.parse(json || '""');

  if (loggedInUser.token) {
    config.headers = { Authorization: `Bearer ${loggedInUser.token}` };
  }

  return config;
});

export { api };
