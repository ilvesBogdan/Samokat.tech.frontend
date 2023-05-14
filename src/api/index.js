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

    axiosInit = (config) => {
        const axiosInstance = axios.create(config);
        return axiosInstance;
    };

    axiosInstance = this.axiosInit(this.axiosConfig);

    post = (url, body) => {
        return defer(() => this.axiosInstance.post(url, body)).pipe(
            map((result) => result.data),
        );
    };

    postWithAuth = (url, body) => {
        const token = `Bearer ${localStorage.getItem('token')}` || '';
        return defer(() => this.axiosInstance.post(url, body, {
            headers: {
                Authorization: token,
            }
        })).pipe(
            map((result) => result.data),
        );
    };

    getWithAuth = (url, params) => {
        const token = `Bearer ${localStorage.getItem('token')}` || '';
        return defer(() => this.axiosInstance.get(url, {
            headers: {
                Authorization: token,
            },
        })).pipe(
            map((result) => result.data),
        );
    };


}

export const API = new APIRequests();