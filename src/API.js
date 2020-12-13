import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:2020/api/",
    responseType: "json",
    headers: {
        'Content-Type': 'application/json',
    }
});