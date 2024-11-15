import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './features/Navigation/Navigation'
import Home from './features/Home/Home'
import Create from './features/Create/Create'


function App() {
  

  return (
   <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/task' element={<Create/>}/>
          <Route path='/tasklist' element={<p>Nikola</p>}/>
          <Route path='/about' element={<p>Nikola</p>}/>
        </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
