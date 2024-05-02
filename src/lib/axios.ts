import axios from "axios";

const instance = axios.create({
  baseURL: "https://buudl.com/api/v1",
});

export default instance