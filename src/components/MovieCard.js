

function MovieCard({title,rating,poster}) {
  return (
    <>
    <div className="card">
    <h3 className="title">{title}</h3>
    <img className="poster" src={poster} alt={title}></img>
    <div className="rating">{rating}/5</div>
    </div>
    </>
  )
}

export default MovieCard