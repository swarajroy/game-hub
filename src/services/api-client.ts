import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "7dd51e9f46324536b04538f1466ad7aa" },
});
