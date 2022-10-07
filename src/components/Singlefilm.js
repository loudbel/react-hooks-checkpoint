import { useParams, useNavigate } from 'react-router-dom';
import movies from "../data/movies";
function Singlefilm() {
    let { id } = useParams();
    const navigate = useNavigate();
    
    let movie = movies.find(movie => movie.id === parseInt(id));

        return (<>
        <div className='singlemovie' >
           
            <h1>{movie.title}</h1>
            <img src ={movie.poster} />
            <p>{movie.description}</p>
            <button onClick={() => navigate(-1)}>go back</button>
        </div>
        </>)

}

export default Singlefilm