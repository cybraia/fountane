"use client";
import { useQuery } from 'react-query';

// Define a function to fetch movies (assuming you have a fetchMovies function)
const fetchMovies = async () => {
  const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=83005cebf696c649069d84ca0f87fe5b');
  const data = await response.json();
  return data.results;
};

function MoviesList() {
  const { data: movieList, isLoading, isError } = useQuery('movies', fetchMovies);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error loading movies</div>;
  }

  return (
    <div className='flex flex-wrap justify-center'>
      {movieList.map((movie) => (
        <div key={movie.id} className="mt-4 ml-4" style={{ maxWidth: "300px" }}>
          <img
            className="w-full h-56 object-cover"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>
      ))}
    </div>
  );
}

export default MoviesList;
