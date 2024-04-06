import PropTypes from "prop-types";

Movie.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
    Language: PropTypes.string.isRequired,
  }).isRequired,
};

function Movie({ movie }) {
  return (
    <div className="card h-100">
      <h4>{movie.Title}</h4>
      <p>({movie.Language})</p>
      <img
        src={movie.Poster}
        className="card-img-top"
        alt="Imagen"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "src/assets/notFound.jpeg"; 
        }}
      />

      <div className="card-body">
        <a href="#formu" className="btn btn-primary buy">
          Dejar reseña
        </a>
      </div>
    </div>
  );
}

export default Movie;
