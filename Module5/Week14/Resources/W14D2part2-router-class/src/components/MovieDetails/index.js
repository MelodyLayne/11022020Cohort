import { useParams, Redirect } from 'react-router-dom';

function MovieDetails({ movies }) {
  const { id } = useParams();

  const movieChoice = movies.find((movie) => Number(movie.id) === Number(id));

  if (!movieChoice) {
    return <Redirect to='/' />;
  }

  return (
    <div className='comp purple'>
      <h1>{movieChoice.title}</h1>
      <p style={{ fontStyle: 'italic' }}>{movieChoice.description}</p>
    </div>
  );
}

export default MovieDetails;
