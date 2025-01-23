import { Link } from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faHeart, faBookmark } from '@fortawesome/free-regular-svg-icons'

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

export interface BookData {
  book: Book
}

const RenderBooks = ({book}: BookData) => {

  return (
        <article className="flex flex-col ">
          {/* Images */}
          <div className="h-40 md:h-60 w-full">
            <img src={`https://res.cloudinary.com/dkhgtdh3i/${book.book_cover}`} alt={book.title} className="w-full h-full object-cover rounded-md" />
          </div>
          {/* Title */}
          <div className="">
            <Link to={`/details/${book.slug}`}>
            <p className="font-medium">{book.title}</p>
            </Link>
          </div>
          {/* WatchList */}
          <div className="flex gap-x-4">
            <div className="flex justify-between items-center gap-x-1">
              <FontAwesomeIcon icon={faHeart} style={{color: "#8f8f8f",}}/>
              <span className="text-gray-600">21k</span>
            </div>
            <div className="flex justify-between items-center gap-x-1">
              <FontAwesomeIcon icon={faBookmark} style={{color: "#8f8f8f",}}/>
              <span className="text-gray-600">21k</span>
            </div>
          </div>

          {/* Author */}
          <div className="text-xs">
            <p className="text-gray-600">Written by: {book.author} </p>
          </div>

        </article>
  );
};

export default RenderBooks