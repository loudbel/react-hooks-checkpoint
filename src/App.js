
import './App.css';
import './components/MovieList'
import MovieList from "./components/MovieList";

function App() {
  
  return (
    <>
    <div className='movies-list'>
    <h1>MOVIES LIST</h1>
    <MovieList/>
    </div>
    </>
  )
}

export default App