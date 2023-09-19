import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    // console.log(bookmark);
    return (
        <div className=''>
            <div>
            <h2 className='bg-white px-3 py-4 mb-4 text-xl font-medium text-slate-600 rounded-lg shadow-lg'>{title}</h2>
            </div>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object 
};

export default Bookmark;