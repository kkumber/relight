import api from "../utils/api";
import { useState, createContext } from "react";


interface UserAuth {
    username: string,
    password: string,
}

interface UserRegisterData {
    username: string,
    email: string,
    password1: string,
    password2: string,
}


const useFetch = () => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();

    // Needs form to send data over
    const getToken = async (loginData: UserAuth) => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await api.post('accounts/auth/login/', loginData);
            setData(res.data);
        } catch (err: any) {
            if (err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    };
    

    const getRefreshToken = async () => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await api.post('accounts/auth/token/refresh/', {}, {
                withCredentials: true,
            });
            setData(res.data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const registerUser = async (registerData: UserRegisterData ) => {
        setIsLoading(true);
        setError(null);
        try {
            console.log(registerData);
            const res = await api.post('accounts/register/', registerData);
            setData(res.data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    return {data, isLoading, error, getToken, getRefreshToken, registerUser};
};
 
export default useFetch;