import './App.css'
import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";
import Home from './pages/Home'
import Question from './pages/Questions'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/questions" element={<Question/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
