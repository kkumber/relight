import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import useFetch from "../hooks/useFetch";


const ProtectedRoute = ({children}: any) => {
    const {data, isLoading, error, getRefreshToken} = useFetch()

    const refreshToken = async () => {
        await getRefreshToken();
    };

    useEffect(() => {
        console.log(data);
    }, [data])

    return (
        <>
        </>
    )
}
 
export default ProtectedRoute;