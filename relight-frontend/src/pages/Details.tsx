import { useEffect, useState } from "react";
import FetchData from "../pages/Home"
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export interface Book {
    id: number,
    title: string,
    author: string,
    sypnosis: string,
    upload_date: string,
    uploaded_by: string,
    book_cover: string,
    pdf_file: File
}



const RenderBooks = () => {
  const {data: bookDetails, isLoading: bookLoading, error: bookError, fetchData: fetchBookDetails} = useFetch();
  const {data: bookComments, isLoading: commentsLoading, error: commentsError, fetchData: fetchBookComments} = useFetch();

  const {slug} = useParams();
  const [book, setBook] = useState<Book>();
  const [userComments, setUserComments] = useState();
  
  const getBookDetails = async () => {
    if (slug) {
      await fetchBookDetails(`library/books/details/${slug}/`);
      await fetchBookComments(`library/books/details/${slug}/comments/`)
    }
  };


  useEffect(() => {
    if (slug) {
      getBookDetails();
    }
  }, [])

  useEffect(() => {
    if (bookDetails) {
      setBook(bookDetails);
      console.log(bookDetails);
    }
    if (bookComments) {
      setUserComments(bookComments);
      console.log(bookComments);
    }
  }, [bookDetails, bookComments])




  return (
    <>
    <section>
{book && <article key={book.id}>
            <h3>{book.title}</h3>
            <img src={book.book_cover} alt={book.title} />
            <p>Sypnosis: {book.sypnosis} </p>
            <p>Written by: {book.author} </p>
            <p>Upload Date: {book.upload_date} </p>
            <p>Uploaded by: {book.uploaded_by} </p>
        </article>}
    </section>

    <section>
      <header>
        <h2>Comments</h2>
      </header>
    </section>
    </>

  );
};

export default RenderBooks