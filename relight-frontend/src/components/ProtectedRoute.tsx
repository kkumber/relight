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
    });

    const refreshToken = async () => {
        await getRefreshToken();
    };

    const expiringToken = () => {
        console.log(accessToken);
        if (accessToken) {
            const decoded = jwtDecode(accessToken);
            const expTime = decoded.exp;
            const now = Date.now();
            console.log(decoded);
            console.log(expTime);
            console.log(now)
            if (expTime) {
                if (expTime < now / 1000) {
                    refreshToken();
                }
            }
        } else {
            return nav('/login');
        }
    };

    useEffect(() => {
        if (data) {
            setAccessToken(data.access_token);
        }
    }, [data])

    const render = accessToken ? <Outlet /> : <Navigate to='/login' />;
    return render;
}
 
export default ProtectedRoute;