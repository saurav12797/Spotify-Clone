import axios from 'axios';
import { store } from "../store";
import { REQUEST_LOGOUT } from "../store/definitions/authConstants";
import {ApiRoutes} from "../routes/routeConstants/apiRoutes";



export const getHeaders = (): any => {
    let headers, user;
    if (localStorage.getItem('accessToken')) {
        user = localStorage.getItem('accessToken') ;
        
    }
    headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user}`,
        /* 'Authorization': `Bearer ${(user && user.adminAuthToken) ? user.adminAuthToken : ''}`, */
    };
    return headers;
};

const axiosInstance = axios.create({
    baseURL: ApiRoutes.BASE_URL,
    timeout: 20000,
});

axiosInstance.interceptors.request.use(function (config) {
    config.headers = getHeaders();
    return config;
});

axiosInstance.interceptors.response.use(
    (response): any => {
     
        return {
            data: response.data,
            message: response.statusText,
            status: response.status
        }
       
        
    },
    (error) => {
        const { response } = error;
        if (response.status === 401) {
            store.dispatch({ type: REQUEST_LOGOUT, payload: 'Request for logout' });
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
