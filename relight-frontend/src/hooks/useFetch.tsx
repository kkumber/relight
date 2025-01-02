import api from "../api";
import { useState } from "react";
import { jwtDecode } from "jwt-decode";


interface UserAuth {
    username: string,
    password: string,
}

const useFetch = () => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState<boolean>()
    const [error, setError] = useState<any>()

    // Needs form to send data over
    const getToken = async ({username, password}: UserAuth) => {
        try {
            const res = await api.post('accounts/auth/login/', {username, password});
            setData(res.data);
        } catch (error) {
            setError(error);
        }
    };

    const getRefreshToken = async () => {
        try {
            const res = await api.post('accounts/auth/token/refresh/', {}, {
                withCredentials: true,
            });
            setData(res.data);
        } catch (error) {
            setError(error);
        }
    };

    return {data, isLoading, error};
};
 
export default useFetch;