import { useEffect } from "react";
import { useAccessTokenContext, useUserContext } from "../utils/AuthProvider"


const Home = () => {
    const {user, setUser} = useUserContext();
    const {accessToken, setAccessToken} = useAccessTokenContext();


    useEffect(() => {
        if(accessToken) {
            console.log(accessToken)
        }
    }, [accessToken])


    return ( <div className="home">
        
    </div> );
}
 
export default Home;