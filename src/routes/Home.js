
import {useState, useEffect } from 'react';
import Movie from '../components/Movie';


function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovie = async () => {
    const responce = await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9.5&sort_by=year");
    const json = await responce.json();
    setMovies(json.data.movies);
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, [])

  return (
    <>
      {loading ? (<div>Loading...</div>) : (
        <>
          <h1>Movies</h1>
          <ul>{movies.map(m => 
            <li key={m.id}>
              <Movie 
                id={m.id}
                image={m.medium_cover_image} 
                title={m.title} 
                summary={m.summary} 
                genres={m.genres} />
            </li>
          )}</ul> 
        </>
      )}      
    </>
  );
}

export default Home;
