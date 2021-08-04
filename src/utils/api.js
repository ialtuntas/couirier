import axios from "axios";

const instance = axios.create({
  baseURL: "http://panel.poshta.ua/api",
});
export default instance;
