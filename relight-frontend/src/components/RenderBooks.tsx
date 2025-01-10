import Data from "../pages/Home"


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

const RenderBooks = ({data}: Data) => {


  return (
    book_list.map(book => {
        <article key={book.id}>
            <h3>{book.title}</h3>
            <img src={book.book_cover} alt={book.title} />
            <p>Sypnosis: {book.sypnosis} </p>
            <p>Written by: {book.author} </p>
            <p>Upload Date: {book.upload_date} </p>
            <p>Uploaded by: {book.uploaded_by} </p>
        </article>
    })

  );
};

export default RenderBooks