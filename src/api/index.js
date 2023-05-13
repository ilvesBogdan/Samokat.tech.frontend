import axios from 'axios';
import { defer, map } from 'rxjs';

const baseURL = 'https://company.caaat.pro/api';

class APIRequests {

    axiosConfig = {
        baseURL: `${baseURL}`,
        responseType: 'json',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    axiosConfigWithAuthorization = Object.assign({}, this.axiosConfig, {
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}` || '',
        },
    });

    setAxiosConfigWithAuthorization = (token) => {
        if (this.axiosConfigWithAuthorization.headers) {
            this.axiosConfigWithAuthorization.headers.Authorization = `Bearer ${token}`;
            this.axiosInstanceWithAuthorization = this.axiosInit(this.axiosConfigWithAuthorization);
        }
    };

    axiosInit = (config) => {
        const axiosInstance = axios.create(config);
        return axiosInstance;
    };

    axiosInstance = this.axiosInit(this.axiosConfig);
    axiosInstanceWithAuthorization = this.axiosInit(this.axiosConfigWithAuthorization);

    post = (url, body) => {
        return defer(() => this.axiosInstance.post(url, body)).pipe(
            map((result) => result.data),
        );
    };

    postWithAuth = (url, body) => {
        return defer(() => this.axiosInstanceWithAuthorization.post(url, body)).pipe(
            map((result) => result.data),
        );
    };

    getWithAuth = (url, params) => {
        return defer(() => this.axiosInstanceWithAuthorization.get(url, params)).pipe(
            map((result) => result.data),
        );
    };


}

export const API = new APIRequests();