import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readTime, setReadTime] = useState(0);

  const handleAddToBookMark = blog => {
    console.log(blog);
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  } 

  const handleMarkAsRead = time => {
    // console.log('reading time ');
    setReadTime(readTime + time);
  }

  // console.log(bookmarks);

  return (
    <section className='container mx-auto space-y-8'>
      <Header></Header>
      <main className='md:flex gap-6'>
        <Blogs 
          handleAddToBookMark = {handleAddToBookMark}
          handleMarkAsRead={handleMarkAsRead}>  
        </Blogs>
        <Bookmarks bookmarks={bookmarks} readTime= {readTime}></Bookmarks>
      </main>
    </section>
  )
}

export default App
