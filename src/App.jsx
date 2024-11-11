import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Navigation from './features/Navigation/Navigation'


function App() {
  

  return (
   <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
          <Route path='/' element={<p>Nikola</p>}/>
          <Route path='/task' element={<p>Nikola</p>}/>
          <Route path='/tasklist' element={<p>Nikola</p>}/>
          <Route path='/about' element={<p>Nikola</p>}/>
        </Routes>
    </BrowserRouter>
   </>
  )
}

export default App
