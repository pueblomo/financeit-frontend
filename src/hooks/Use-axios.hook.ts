import {useCallback} from "react"
import axios, {AxiosError, AxiosRequestConfig} from "axios"


const useAxios = <T>(config: AxiosRequestConfig) => {
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
    }, [config]);

    return [sendRequest] as const;
}

export default useAxios;
