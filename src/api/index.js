import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { defer, Observable, map, catchError, of } from 'rxjs';

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
            Authorization: `Bearer ${localStorage.getItem('tocken')}` || '',
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
        return defer(() => this.axiosInstanceWithAuthorization.post(url, body)).pipe(
            map((result) => result.data),
            catchError((error) => {
                console.error(error);
                return of(null);
            })
        );
    };
}

export const API = new APIRequests();