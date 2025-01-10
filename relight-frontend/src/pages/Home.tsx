import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import AddBookForm from "../components/AddBookForm";
import RenderBooks from "../components/RenderBooks";
import { Book } from "../components/RenderBooks";

interface BookList {
    results: Book[]
}

export interface Data {
    count: number,
    next: undefined,
    previous: undefined,
    results: Book[]
}


const Home = () => {
    const {data: returns, isLoading, error, fetchData} = useFetch();
    const [data, setData] = useState<Data>();

    useEffect(() => {
        fetchData('library/books/');
    }, []);

    useEffect(() => {
        if (returns) {
            setData(returns);
        };
    }, [returns])


    return ( <div className="home">
        Home
        <section>
            <h2>Submit a Book</h2>
            <AddBookForm />
        </section>

        <section>
            <h2>Browse</h2>
            <RenderBooks data={data} />
        </section>
    </div> );
}

export default Home;