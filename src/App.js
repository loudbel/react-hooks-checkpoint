
import './App.css';
import './components/MovieList'
import MovieList from "./components/MovieList";
import { Routes, Route } from "react-router-dom"
import Singlefilm from './components/Singlefilm';
function App() {
  
  return (
    <>
      <Routes>
        <Route path="/" element={ <MovieList/> } />
        <Route path="film/:id" element={ <Singlefilm/> } />
      </Routes>
    </>
  )
}

export default App