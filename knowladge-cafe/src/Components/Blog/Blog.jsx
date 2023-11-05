import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {
    // console.log(blog);
    const {title,cover,autor,autor_img,reading_time,posted_date,hastags} = blog
    return (
        <div className='m-4 mb-20'>
           
           <img className='w-full mb-8' src={cover} alt= {`cover picture of title${title}`} />

           <div className='flex justify-between mb-4'>
                <div className='flex'>

                    <img className='w-14' src={autor_img} alt="" />
                    <div className='ml-6'>
                        <h2 className="text-2xl">{autor}</h2>
                        <p>{posted_date}</p>
                    </div>

                </div>

                <div className='items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=> handleAddToBookmark(blog)} className='ml-2 text-red-600'><FaBookmark></FaBookmark></button>
                </div>

           </div>
           <h2 className='text-2xl'>{title}</h2>
           <p>{
                hastags.map((hash, idx) => <span key={idx}> <a href="">{hash}</a> </span>)
            }</p>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleAddToBookmark:PropTypes.func
}

export default Blog;