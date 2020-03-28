import axios from 'axios'

export const initService = (Cookie,baseUrl?)=> {
  const service =  axios.create({
    baseURL:baseUrl,
    timeout:5000
  });
  service.interceptors.request.use(
    config => {
      config.headers.Cookie = Cookie || ''
      return config;
    },
    error => {
      console.log(error); // for debug
      return Promise.reject(error);
    }
  );
return service
}
