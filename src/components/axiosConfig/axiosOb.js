import axios from "axios";
import store from '../store/store'
import {changeLoader} from '../store/Actions/Loader'
const axiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
  
    // headers:{
    //     "auth":"455s5s5s55s5"
    // },
    // params:{
  
    // }
  });
  axiosInstance.interceptors.request.use(
    function (config) {
      // Do something before request is sent
      store.dispatch(changeLoader(true));
      config.params = {'api_key':'da50a8fb00e0ffed655d21096786a68f'}
      console.log(config)
      return config;
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error);
    }
  );
  axiosInstance.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      store.dispatch(changeLoader(false));
      return response;
    },
    function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    }
  );
  export default axiosInstance;