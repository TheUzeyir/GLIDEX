import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Main from './page/main/Main'

function App() {

  return (
    <BrowserRouter>    
      <Routes>
        <Route path='/' element={<Main/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
