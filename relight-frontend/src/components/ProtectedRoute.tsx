import { useEffect, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import useFetch from "../hooks/useFetch";
import api from "../utils/api";
import UserContext, { useAccessTokenContext, useUserContext } from "../utils/AuthProvider"
import AccessTokenContext from "../utils/AuthProvider"
import Login from "../pages/Login";
import { UserType, AccessTokenType, CSRFTokenType } from "../utils/AuthProvider";



const ProtectedRoute = ({children}: any) => {
    const {data, isLoading, error, getRefreshToken} = useFetch();
    const {user, setUser} = useUserContext();
    const {accessToken, setAccessToken} = useAccessTokenContext();

    const refreshToken = async () => {
        if (user && accessToken) {
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
        }  
    };

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])

    const render = accessToken && user ? {children} : <Login />
    return render;
}
 
export default ProtectedRoute;