import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

const [bookmarks, setBookmarks] = useState([])
const [readingTime, setreadingTime] = useState(0)

const handleAddToBookmark = blog=>{
  // console.log(blog);
  const newBookmarks = [...bookmarks, blog]
  setBookmarks(newBookmarks)
}

const handleMarkRead = time =>{
  // console.log('Marking As Time',time);
  const newReadingTime = readingTime + time;
  setreadingTime(newReadingTime);
}

  return (
    <>
    <Header></Header> 
   <div className='md:flex max-w-6xl mx-auto'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkRead={handleMarkRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} 
      readingTime={readingTime}></Bookmarks>
   </div>
    </>
  )
}

export default App
