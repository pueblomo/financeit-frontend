import {useCallback} from "react"
import axios, {AxiosError, AxiosRequestConfig} from "axios"

const baseURL = "http://localhost/";

const useAxios = <T>(config: AxiosRequestConfig) => {
    config.baseURL = baseURL;
    config.timeout = 1000;

    const sendRequest = useCallback((): Promise<T> => {
        return new Promise((resolve, reject) => {
            axios.request<T>(config)
                .then((res) => {
                    resolve(res.data);
                })
                .catch((err: AxiosError) => {
                    if (err.message.includes('404')) {
                        reject('Server not Found');
                    } else {
                        reject('Something went wrong');
                    }
                })
        });
    }, []);

    return [sendRequest] as const;
}

export default useAxios;
