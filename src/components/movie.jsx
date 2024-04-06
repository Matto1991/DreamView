import PropTypes from "prop-types";

Movie.propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      Poster: PropTypes.string.isRequired,
    }).isRequired,
  };


function Movie({ movie }) {
  return (
    
         <div className="card h-100">
                <h4>{movie.title}</h4>
                <img
                  src={movie.Poster}
                  className="card-img-top"
                  alt="Imagen"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'src/assets/notFound.jpeg'; // URL of a default image to show
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
