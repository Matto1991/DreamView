import PropTypes from "prop-types";
import Movie from "./movie";
const MoviePropTypes = PropTypes.shape({
  Title: PropTypes.string.isRequired,
  Description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
});

Movies.propTypes = {
  movies: PropTypes.arrayOf(MoviePropTypes).isRequired,
};

/* $grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
); */
function Movies({ movies }) {
  return (
    <>
      <div id="cartelera">
        <h2 className="title-movies">En cartelera</h2>
        <div id="container">
          <div className="row gx-5">
            {movies.map((m, idx) => (
              <div key={idx} className="col-6 col-xl-2">
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
