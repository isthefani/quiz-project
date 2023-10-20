import './App.css'
import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";
import Home from './pages/Home'
import QuestJs from './pages/Questions/QuestJs';
import QuestHtml from './pages/Questions/QuestHtml';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/questionsJs" element={<QuestJs/>}/>
        <Route path="/questionsHtml" element={<QuestHtml/>}/>
        {/* <Route path="/questionsHtml" element={<Question/>}/>
        <Route path="/questionsHtml" element={<Question/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
