import { useEffect, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import useFetch from "../hooks/useFetch";
import api from "../utils/api";
import UserContext, { useAccessTokenContext, useUserContext } from "../utils/AuthProvider"
import AccessTokenContext from "../utils/AuthProvider"
import Login from "../pages/Login";
import { UserType, AccessTokenType, CSRFTokenType } from "../utils/AuthProvider";
import { Navigate, Outlet, useNavigate } from "react-router-dom";



const ProtectedRoute = () => {
    const {data, isLoading, error, getRefreshToken} = useFetch();
    const {user, setUser} = useUserContext();
    const {accessToken, setAccessToken} = useAccessTokenContext();
    const nav = useNavigate();

    const refreshToken = async () => {
        if (accessToken) {
            await getRefreshToken();
        }
    };

    const expiringToken = () => {
        if (accessToken) {
            const decoded = jwtDecode(accessToken);
            const expTime = decoded.exp;
            const now = Date.now();

            if (expTime! < now / 1000) {
                refreshToken();
            }
        } else {
            return nav('/login');
        }
    };

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])

    const render = accessToken ? <Outlet /> : <Navigate to='/login' />;
    return render;
}
 
export default ProtectedRoute;