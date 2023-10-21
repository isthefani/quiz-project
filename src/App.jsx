import './App.css'
import { 
  BrowserRouter, 
  Routes, 
  Route } from "react-router-dom";
import Home from './pages/Home'
import QuestJs from './pages/Questions/QuestJs';
import QuestHtml from './pages/Questions/QuestHtml';
import QuestReact from './pages/Questions/QuestReact';
import QuestCss from './pages/Questions/QuestCss';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/questionsJs" element={<QuestJs/>}/>
        <Route path="/questionsHtml" element={<QuestHtml/>}/>
        <Route path="/questionsReact" element={<QuestReact/>}/>
        <Route path="/questionsCss" element={<QuestCss/>}/>  
      </Routes>
    </BrowserRouter>
  )
}

export default App