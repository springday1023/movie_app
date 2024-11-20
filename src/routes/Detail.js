import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

function Detail () {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const getMovieDetail = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie)
        setLoading(false)
    }
    useEffect(() => {
        getMovieDetail();
    }, [])

    return <>
        {loading ? "Loading..." : (
            <Movie 
                image={movie.medium_cover_image} 
                id={movie.title} 
                title={movie.title} 
                summary={movie.description_intro} 
                genres={movie.genres} />
        )}
    </>;
}




  
export default Detail;