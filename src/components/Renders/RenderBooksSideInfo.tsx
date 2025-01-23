import { BookData } from "./RenderBooks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faBookmark } from "@fortawesome/free-regular-svg-icons";

const RenderBooksSideInfo = ({book}: BookData) => {
  return (
    <article className="grid grid-cols-3 gap-x-4 justify-between mb-4">
        {/* Image Container */}
        <div className="col-span-1 h-28">
            <img src={`https://res.cloudinary.com/dkhgtdh3i/${book.book_cover}`} alt={book.title} className="w-full h-full object-cover rounded-md" />
        </div>
        {/* Infomation Container */}
        <div className="flex flex-col col-span-2 justify-start">
            <div className="">
                <p className="font-medium">{book.title}</p>
            </div>
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
            <div className="text-xs">
                <p className="text-gray-600">Written by: {book.author} </p>
            </div>
        </div>
    </article>
  );
};

export default RenderBooksSideInfo;