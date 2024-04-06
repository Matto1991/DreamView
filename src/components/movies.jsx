import PropTypes from "prop-types";
import Movie from "./movie";
const MoviePropTypes = PropTypes.shape({
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  Language: PropTypes.string.isRequired,
});

Movies.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
};


function Movies({ movies }) {
  return (
    <>
      <div id="cartelera">
        <h2 className="title-movies">En cartelera</h2>
        <div id="container">
          <div className="row gx-5 movies-row">
            {movies.map((m, idx) => (
              <div key={idx} className="col-6 col-lg-2 col-xl-2">
                <Movie  movie={m} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Movies;
