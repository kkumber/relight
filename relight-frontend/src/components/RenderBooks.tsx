import { useEffect } from "react";
import FetchData from "../pages/Home"
import { Link } from "react-router-dom";


export interface Book {
    id: number,
    title: string,
    author: string,
    sypnosis: string,
    upload_date: string,
    uploaded_by: string,
    book_cover: string,
    pdf_file: File
    slug: string,
}

interface BookData {
  book: Book
}

const RenderBooks = ({book}: BookData) => {

  return (
        <article>
            <Link to={`/details/${book.slug}`}>
            <h3>{book.title}</h3>
            </Link>
            <img src={book.book_cover} alt={book.title} />
            <p>Uploaded by: {book.uploaded_by} </p>
        </article>
  );
};

export default RenderBooks