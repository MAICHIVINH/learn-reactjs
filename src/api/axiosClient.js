import axios from 'axios';


const axiosClient = axios.create({
    baseURL: 'https://api.ezfrontend.com/',
    headers: {
        'Content-Type': 'application/json',
    },
});

//Interceptors
// Add a request interceptor
axiosClient.interceptors.request.use(function (config) {
      // Có thể thêm logic xử lý request trước khi gửi đi, ví dụ như thêm token vào header
      // Example: 
      // const token = localStorage.getItem('access_token');
      // if (token) {
      //   config.headers['Authorization'] = `Bearer ${token}`;
      // }
      return config;
    }, function (error) {
      // Handle request error
      return Promise.reject(error);
    }
  );
axiosClient.interceptors.response.use(function (response){
    //Any status code that lie within the range off 2xx cause this function to trigger
    // Do something with response data
    return response.data;
}, function(error) {
    //Any status code that falls outside the range off 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});
export default axiosClient;


// Lấy axios tạo ra 1 cái instance của nó mình sử dụng chung, tất cả các nới chỉ sử dụng chung 1 cái instance là axios 