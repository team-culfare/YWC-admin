import axios from "axios";

const instance = () => {
  const api = axios.create({
    baseURL: import.meta.env.BASE_URL,
  });

  return api;
};

export default instance;
