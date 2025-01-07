import { useEffect, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import useFetch from "../hooks/useFetch";
import api from "../utils/api";
import { useAccessTokenContext, useUserContext } from "../utils/AuthProvider"
import AccessTokenContext from "../utils/AuthProvider"
import Login from "../pages/Login";
import { UserType, AccessTokenType, CSRFTokenType } from "../utils/AuthProvider";
import { Navigate, Outlet, useNavigate } from "react-router-dom";



const ProtectedRoute = () => {
    const {data, isLoading, error, getRefreshToken} = useFetch();
    const {user, setUser} = useUserContext();
    const {accessToken, setAccessToken} = useAccessTokenContext();
    const nav = useNavigate();

    api.interceptors.request.use(
        (config) => {

        if (accessToken) {
            config.headers['Authorization'] = `Bearer ${accessToken}`;
        };

        return config;
    }, (error) => {
        return Promise.reject(error);
    }
);

    const refreshToken = async () => {
        await getRefreshToken();
        setAccessToken(data.access_token);
    };

    const auth = () => {
        console.log(accessToken);
        if (accessToken) {
            const decoded = jwtDecode(accessToken);
            const expTime = decoded.exp;
            const now = Date.now() / 1000;
            if (expTime! < now) {
                refreshToken();
            } else {
                nav('/login');
            }
        } else {
            return nav('/login');
        }
    };

    useEffect(() => {
        auth();
    }, [])

    const render = accessToken ? <Outlet /> : <Navigate to='/login' />;
    return render;
}
 
export default ProtectedRoute;