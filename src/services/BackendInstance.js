import axios from 'axios';

const BackendInstance = axios.create({
  baseURL:  process.env.VUE_APP_BACKEND_PATH,
  headers: {
    'Content-Type': 'application/json',
  },
});

BackendInstance.interceptors.request.use(
  (config) => {
    console.log("Request interceptor", config);
    const token = localStorage.getItem('access_token');
    if (token) {
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      return BackendInstance.post('/refreshToken', {
        refresh_token: localStorage.getItem('refresh_token'),
      })
      .then((response) => {
        localStorage.setItem('access_token', response.data.accessToken);
        originalRequest.headers.Authorization = response.data.accessToken;
        return BackendInstance(originalRequest);
      })
      .catch((refreshError) => {
        return Promise.reject(refreshError);
      });
    }

    return Promise.reject(error);

  }
);

export default BackendInstance;