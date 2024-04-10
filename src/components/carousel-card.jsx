import PropTypes from "prop-types";

CarouselCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
    imdbRating: PropTypes.string.isRequired,
  }).isRequired,
};
function CarouselCard({ movie }) {
  const { title, description, imageSrc, trailer, imdbRating } = movie;
  return (
    <div className="card-overlay">
      <div className="square">
        <div className="card">
          <div className="card-body imdb-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-star-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
            </svg>

            <p>
              <strong>{imdbRating}</strong>/10
            </p>
            <p>
              <strong>IMDB</strong>
            </p>
          </div>
        </div>
      </div>
      <div className="card-content">
        <div className="card mb-3">
          <div className="row g-0">
            <div id="imgCarousel" className="col-md-4">
              <img
                src={imageSrc}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div id="carousel" className="card-body card-carou">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              </div>
              <div className="buttons-carousel">
                <div className="container">
                  <div className="row">
                    <div className="col colCarousel">
                      <div className="row ticket-trailer">
                        <div className="col-12 buy-ticket">
                          <a
                            href={trailer}
                            className="trailer-btn-container"
                            target="_blank"
                          >
                            <div className="trailer-btn icons">
                              <div className="trailer-btn-background"></div>
                            </div>
                          </a>
                        </div>

                        <div className="col-12 buy-ticket">
                          <p>Ver trailer</p>
                        </div>
                      </div>
                      <div className="trailer-ticket-buttons-container"></div>
                    </div>
                    <div className="col colCarousel">
                      <div className="row">
                        <div className="col-12 buy-ticket">
                          <a
                            href="#formu"
                            className="trailer-ticket-buttons-container"
                          >
                            <div className="ticket-btn-container">
                              <div className="ticket-btn icons">
                                <div className="ticket-btn-background"></div>
                              </div>
                            </div>
                          </a>
                        </div>

                        <div className="col-12 buy-ticket">
                          <p> Comprar ticket</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselCard;
