import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-slate-200 mt-2 mb-2 p-4 rounded-lg'>
            <h3 className='text-2xl '>{title}</h3>
        </div>
    );
};

Bookmark.propTypes ={
    Bookmark: PropTypes.object
}

export default Bookmark;