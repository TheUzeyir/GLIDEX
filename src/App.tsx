import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './page/main/Main'
import About from './page/about/About'
import Contact from './page/contact/Contact'
import Journal from './page/Courses/Journal'
import Notfound from './page/notfound/Notfound'
import Events from './page/Events/Events'
import Instructor from './page/instructor/Instructor'
import Blog from './page/blog/Blog'
import LikedItems from './page/likedItems/likedItems'
import { SignIn, SignUp } from '@clerk/clerk-react'

function App() {

  return (
    <BrowserRouter>    
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About  />}/>
        <Route path='/contact' element={<Contact  />}/>
        <Route path='/Courses' element={<Journal  />}/>
        <Route path='/event' element={<Events/>}/>
        <Route path='/Instructor' element={<Instructor/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/likedItems' element={<LikedItems/>}/>
        <Route path='/signIn' element={<SignIn/>}/>
        <Route path='/signUp' element={<SignUp/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
