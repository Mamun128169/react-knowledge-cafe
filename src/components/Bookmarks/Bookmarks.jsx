import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks, readTime}) => {
    console.log(readTime);
    return (
        <div className="md:w-1/3  p-5 bg-slate-100  rounded-lg">
             <div className='bg-gray-50 p-5 shadow-md rounded-lg '>
                <h2 className='text-xl text-blue-700 font-semibold text-center'>Spent time on read: {readTime} min </h2>
            </div>
            <h2 className='text-center text-2xl font-medium underline mb-4 mt-3'>Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map( (bookmark, index) => <Bookmark key={index} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmarks.propTypes = {
    bookmarks:PropTypes.array,
    readTime:PropTypes.number
};

export default Bookmarks;