import useApi from "../utils/api";
import { useState, createContext } from "react";
import { useAccessTokenContext, useUserContext, useCSRFTokenContext } from "../utils/AuthProvider";


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

interface PostData {
    url: string,
    data: object,
}



const useFetch = () => {
    //Might have to seperate fetch for authFetch, generics, etc.

    const api = useApi();
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<any>();
    const {accessToken, setAccessToken} = useAccessTokenContext();
    const {csrf_token, setcsrf_token} = useCSRFTokenContext();
    const {user, setUser} = useUserContext();


    const getToken = async (loginData: UserAuth) => {
        setIsLoading(true);
        setError(null);
        try {
            const res = await api.post('accounts/auth/login/', loginData);
            setData(res.data);
            setAccessToken(res.data.access_token);
            setcsrf_token(res.data.csrf_token);
        } catch (err) {
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
            setAccessToken(res.data.access_token);
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

    const fetchData = async (url: string) => {
        setIsLoading(false);
        setError(null);
        try {
            const res = await api.get(url);
            setData(res.data);
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            }
        } finally {
            setIsLoading(false);
        }
    };

    const postData = async (url: string, data: object) => {
        setIsLoading(false);
        setError(null);
        try {
            const res = await api.post(url, data, {
                headers: {'Content-type': 'multipart/form-data'}
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

    return {data, isLoading, error, getToken, getRefreshToken, registerUser, fetchData, postData};
};
 
export default useFetch;