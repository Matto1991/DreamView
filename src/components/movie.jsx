import PropTypes from "prop-types";

Movie.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Language: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  }).isRequired,
};

function Movie({ movie }) {
  return (
    <div className="card h-100">
      <h5>{movie.Title}</h5>
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
          Comprar ticket
        </a>
      </div>
    </div>
  );
}

export default Movie;
