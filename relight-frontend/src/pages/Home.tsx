import { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import AddBookForm from "../components/AddBookForm";



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
        <section>
            <h2>Submit a Book</h2>
            <AddBookForm />
        </section>
    </div> );
}

export default Home;