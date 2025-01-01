import { useState } from "react";
import {ACCESS_TOKEN, REFRESH_TOKEN} from '../constants';
import { jwtDecode } from "jwt-decode";
import api from "../api";


const ProtectedRoute = ({children}: any) => {
    const refreshToken = () => {
        
    };

    const auth = () => {

    };



}
 
export default ProtectedRoute;