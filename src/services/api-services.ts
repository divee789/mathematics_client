
import axios from 'axios';
import { Logger } from '../utils/index';
import { Storage } from '../services/storage-services';
import APIServiceError from './error-services';
import decode from 'jwt-decode';

const APIBaseURL = process.env.URL || 'http://localhost:1000';


// interface ICourse {
//     status: boolean,
//     data: {
//         id: number,
//         title: string,
//         course_code: string,
//         credit_load: number,
//         semester: number,
//         level: number,
//         lecturer: object
//     }

// }
export default class APIRequest {

    public instance: any
    constructor(baseURL: any) {
        this.instance = axios.create({
            baseURL: baseURL || APIBaseURL,
            timeout: 10000,
            headers: {
                Accept: 'application/json'
            }
        });

        this.instance.interceptors.request.use(
            (config: any) => {
                Logger.info('Request: ', config.url);
                return config;
            },
            (error: any) => {
                Logger.error('Request Error: ', error);
                return Promise.reject(error);
            }
        );

        this.instance.interceptors.response.use(
            (response: any) => {
                Logger.info('Response: ', response.config.method, response.config.url, response.status);
                return response;
            },
            (error: any) => {
                if (!error.response) {
                    Logger.error('Response: ', 'Network Error');
                    return Promise.reject(
                        new APIServiceError({
                            status: 500,
                            data: {
                                message: 'Network Error, try again',
                                error: 'server_error',
                                data: null
                            }
                        })
                    );
                }
                Logger.warn('Response: ', error.response);
                return Promise.reject(new APIServiceError(error.response));
            }
        );
        this.checkAuthToken();
    }

    checkAuthToken = () => {
        const token = Storage.checkAuthentication();
        this.setHeader(token);
    };

    setHeader = (token: string) => {
        this.instance.defaults.headers.common.Authorization = `Bearer ${token}`;
    };

    clearHeader() {
        delete this.instance.defaults.headers.common.Authorization;
    }
    isloggedIn = () => {
        // Checks if there is a saved token and it's still valid
        const token = Storage.checkAuthentication();
        // Getting token from localstorage
        console.log(!!token)
        return !!token && !this.isTokenExpired(token);
    };

    isTokenExpired = async (token: string) => {
        try {
            const decoded: any = decode(token);
            console.log(decoded)
            console.log(new Date().getTime() - decoded.iat)
            if (decoded.exp < new Date().getTime() - decoded.iat) {
                console.log('expired token found');
                return true;
            } else return false;
        } catch (err) {
            console.log('expired check failed');
            return false;
        }
    };

    logout = () => {
        Storage.removeItem('userToken');
        Storage.removeItem('refreshToken');
        Storage.removeItem('userTokenExpiration');
    };

    setToken = (token: string) => {
        this.setHeader(token);
    };

    storeUserToken = (token: any, refreshToken: any, userTokenExpiration: any) => {
        Storage.setItem('userToken', token);
        Storage.setItem('refreshToken', refreshToken);
        Storage.setItem('userTokenExpiration', userTokenExpiration);
    };

    logIn = async (data: any) => {
        const body = {
            ...data
        };

        const response = await this.instance.post('/auth/login', body);
        const authResponse = response.data;
        console.log(authResponse)
        this.storeUserToken(authResponse.access_token, authResponse.refresh_token, authResponse.expires_in);
        this.setToken(authResponse.access_token);
        const user = await this.instance.get('/auth/user');
        console.log(user);
        const profileResponse = user.data.user;
        return { ...authResponse, user: profileResponse };
    };

    signUp = async (data: any) => {
        const body = {
            ...data
        };
        const response = await this.instance.post('/auth/register', body);
        const authResponse = response.data;
        this.storeUserToken(authResponse.access_token, authResponse.refresh_token, authResponse.expires_in);
        this.setToken(authResponse.access_token);
        const user = await this.instance.get('/auth/user');
        console.log(user);
        const profileResponse = user.data.user;
        return { ...authResponse, user: profileResponse };
    };
    update = async (data: any) => {
        const body = {
            ...data
        };
        const response = await this.instance.post('/user/update', body);
        const authResponse = response.data;
        console.log(authResponse)
        const user = await this.instance.get('/user');
        console.log(user);
        const profileResponse = user.data.profile;
        return { user: profileResponse };
    };
    refresh = async (refresh_token: string) => {
        try {
            const body = {
                refresh_token: refresh_token
            };
            const response = await this.instance.post('/user/token', body);
            if (!response) {
                console.log('no response');
            }
            const authResponse = response.data;
            console.log('refresh', authResponse);
            this.storeUserToken(authResponse.access_token, authResponse.refresh_token, authResponse.expires_in);
            this.setToken(authResponse.access_token);
            return authResponse;
        } catch (e) {
            console.log('e', e);
            console.log(e.response.status);
            return e.response;
        }
    };



    getCourses = async () => {
        try {
            const response = await this.instance.get('/years/api/courses/getAll')
            const courses = response.data.data
            console.log(response, courses)
            return courses
        } catch (error) {
            console.log(error)
            return error
        }
    }
    getLevelCourses = async (level: number) => {
        try {
            const response = await axios.get(`http://localhost:1000/years/api/courses/getAll/${level}`)
            const courses = response.data.data
            console.log(response, courses)
            return courses
        } catch (error) {

        }
    }
}

