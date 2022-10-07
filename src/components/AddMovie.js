import {useState,useEffect} from 'react';

function AddMovie({films, handlerAddFilm}) {
    const [movies, setMovies] = useState(films);
    const [title, setTitle] = useState('');
    const [rating, setRating] = useState(0);
    const [poster, setPoster] = useState('');
    const handlerAdd = ()=>{
        const newFilm = [...movies,{
            id: movies.length + 1,
            title:title,
            rating:Number(rating),
            poster:poster
        }]
        handlerAddFilm(newFilm);
        setMovies((old)=>old = films)
    }

    useEffect(() => {
        setMovies(films);
    })
    

  return (
    <div>
        <input placeholder='Film title' type="text" onChange={(e) => setTitle(e.target.value)} ></input>
        <input placeholder='Film rating' max='5' min='0' step="5" type="number" onChange={(e) => setRating(e.target.value)} ></input>
        <input placeholder='Film poster' type="link" onChange={(e) => setPoster(e.target.value)} ></input>
        <button onClick={handlerAdd}>Add</button>
    </div>
  )
}

export default AddMovie