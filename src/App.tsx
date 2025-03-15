import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './page/main/Main'
import About from './page/about/About'
import Contact from './page/contact/Contact'
import Journal from './page/journal/Journal'

function App() {

  return (
    <BrowserRouter>    
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<About  />}/>
        <Route path='/contact' element={<Contact  />}/>
        <Route path='/journal' element={<Journal  />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
