import { useEffect, useState, useContext } from "react";
import { jwtDecode } from "jwt-decode";
import useFetch from "../hooks/useFetch";
import api from "../utils/api";
import UserContext from "../utils/AuthProvider"
import AccessTokenContext from "../utils/AuthProvider"



const ProtectedRoute = ({children}: any) => {
    const {data, isLoading, error, getRefreshToken} = useFetch();
    const {user, setUser} = useContext(UserContext);
    const {accessToken, setAccessToken} = useContext(AccessTokenContext);

    const refreshToken = async () => {
        if (user) {
            await getRefreshToken();
        }
    };

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])

    return (
        <>
        </>
    )
}
 
export default ProtectedRoute;