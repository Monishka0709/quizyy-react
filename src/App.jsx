
import Quiz from './components/Quiz'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Home from './components/Home';
import Login from './components/Login'
import './App.css'
// import { Route } from 'react-router-dom';

function App() {
  
  

  return (
    <>
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route exact path='/home' element={<Home/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route exact path='/quiz' element={<Quiz/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route exact path='/login' element={<Login/>}/>
    </Routes>
    </Router>

    {/* <Home/> */}
    </>
  )
}

export default App
