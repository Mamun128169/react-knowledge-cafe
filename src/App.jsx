import Header from './components/Header/Header'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {

  return (
    <section className='container mx-auto'>
      <Header></Header>
      <main className='md:flex'>
        <Blogs></Blogs>
        <Bookmarks></Bookmarks>
      </main>
    </section>
  )
}

export default App
