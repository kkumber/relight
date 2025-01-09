import { useEffect } from "react";
import useFetch from "../hooks/useFetch";



const Home = () => {
    const {data, isLoading, error, fetchData} = useFetch();

    useEffect(() => {
        fetchData('library/books/');
    }, []);

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])

    return ( <div className="home">
        Home
    </div> );
}
 
export default Home;