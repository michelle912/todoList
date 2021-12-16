import axios from "axios";

const api = axios.create({
    // baseURL: "https://61b9880e38f69a0017ce60a5.mockapi.io/"
    baseURL: "http://localhost:8080"
});


export default api;