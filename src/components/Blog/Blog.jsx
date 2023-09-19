import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookMark, handleMarkAsRead}) => {
    // console.log(blog);
    const {title, author, author_img, cover, posted_date, reading_time, hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <div>
            <img className='w-full rounded-lg' src= {cover} alt='' />
            </div>
            <div className='flex justify-between items-center'>
                <div className='flex gap-6 items-center'>
                 <div>
                   <img className='w-16' src= {author_img} alt="" /> 
                 </div>
                 <div>
                    <h3 className='text-2xl font-bold'>{author}</h3>
                    <h5 className='text-base text-[#11111199] font-medium'>{posted_date}</h5>
                 </div>
                </div>
                <div className='flex gap-2 text-rose-400 hover:text-rose-700'>
                <h4 className='text-lg font-medium text-right text-[#11111199]'>{reading_time} min read</h4>
                <button className='text-2xl'
                onClick={() => handleAddToBookMark(blog)}>
                    <FaBookmark></FaBookmark>
                </button>
                </div>
            </div>
            <h2 className='text-4xl font-bold leading-[60px]'>{title}</h2>
            <div className='flex gap-3'>
            {
                hashtags.map((hash, index) => <h5 key={index}><small className='text-xl text-[#11111199] font-medium'>#{hash}</small></h5>)
            }
            </div>
            <button 
            onClick={() => handleMarkAsRead(reading_time)}
            className='text-lg text-purple-600 underline hover:text-violet-800 font-medium'
            >Mark as read</button>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object,
    handleAddToBookMark:PropTypes.func,
    handleMarkAsRead:PropTypes.func
}

export default Blog;