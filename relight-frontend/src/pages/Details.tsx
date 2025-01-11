import { useEffect, useState } from "react";
import FetchData from "../pages/Home"
import { useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import CommentForm from "../components/CommentForm";
import RenderComments from "../components/RenderComments";
import { UserComment } from "../components/RenderComments";

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
  const bookURL = `library/books/details/${slug}/`;
  const commentURL = `library/books/details/${slug}/comments/`;
  
  const getBookDetails = async () => {
    if (slug) {
      await fetchBookDetails(bookURL);
      await fetchBookComments(commentURL);
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
      <h3>Add Comment</h3>
      <CommentForm commentURL={commentURL} />
    </section>

    <section>
      <header>
        <h2>Comments</h2>
        { userComments &&
          userComments.map(userComment => {
            <RenderComments userComment={userComment} />
          })
        }
      </header>
    </section>
    </>

  );
};

export default RenderBooks