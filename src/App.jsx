import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './features/Navigation/Navigation'
import Home from './features/Home/Home'
import Create from './features/Create/Create'
import List from './features/List/List'
import About from './features/About/About'


function App() {
  

  return (
   <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/task' element={<Create/>}/>
          <Route path='/tasklist' element={<List/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
