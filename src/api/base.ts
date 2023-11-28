import axios from "axios";

const instance = () => {
  const api = axios.create({
    baseURL: import.meta.env.VITE_PUBLIC_API_ENDPOINT,
  });

  return api;
};

export default instance;
