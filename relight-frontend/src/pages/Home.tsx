import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import AddBookForm from "../components/AddBookForm";
import RenderBooks from "../components/RenderBooks";
import { Book } from "../components/RenderBooks";
import Loading from "../components/Loading";
import ErrorMsg from "../components/ErrorMsg";
import Header from "../components/Header"



export interface FetchData {
    count: number,
    next: undefined,
    previous: undefined,
    results: Book[]
}


const Home = () => {
    const {data: returns, isLoading, error, fetchData} = useFetch();
    const [bookList, setBookList] = useState<FetchData>();

    useEffect(() => {
        fetchData('library/books/');
    }, []);

    useEffect(() => {
        if (returns) {
            setBookList(returns);
            console.log(returns)
        };
    }, [returns])


    return (     
    <div className="home">
        <Header />

        <section>
            <h2>Submit a Book</h2>
            <AddBookForm />
        </section>

        {/* Main Container */}
        <div className="">
            <section>
                <h2>Trending</h2>
                <hr />
                {isLoading && <Loading />}
                {error && <ErrorMsg error={error} />}

                {/* Grid Container */}
                <div className="grid-cols-3 gap-4">
                    {
                        bookList?.results.map(book => 
                            <div key={book.id}>
                                <RenderBooks book={book} />
                            </div>
                        )
                    }
                </div>
            </section>
        </div>
        
    </div> );
}

export default Home;