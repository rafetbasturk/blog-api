import axios from "axios";

const authFetch = axios.create({
  baseURL: "/api/v1"
})

authFetch.interceptors.request.use(
  (request) => {
    // request.headers['Accept'] = `application/json`;
    return request;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

authFetch.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error.response);
    return Promise.reject(error);
  }
);

export default authFetch