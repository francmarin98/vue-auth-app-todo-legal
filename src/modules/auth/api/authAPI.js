import axios from "axios";

const authAPI = axios.create({
  baseURL: "https://90h9amptse.execute-api.us-east-1.amazonaws.com",
});

export default authAPI;
