
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Movie({ image, title, summary, genres, id }) {
  return (
    <div>
      <img src={image} alt="" />
      <h2>
        {id === title ? title : 
          <Link to={`/movie/${id}`}>{title}</Link>
        }
      </h2>
        
      <p>{summary == "" ? "There's no summary" : summary}</p>
      
      <ul>
        {genres.map((g) => <li key={g}>{g}</li>)}
      </ul>
    </div>
  );
}


Movie.propTypes = {
  image     : PropTypes.string.isRequired,
  title     : PropTypes.string.isRequired,
  summary   : PropTypes.string.isRequired,
  genres    : PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
