import PropTypes from "prop-types";

CarouselCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
  }).isRequired,
};
function CarouselCard({ movie }) {
  const { title, description, imageSrc, trailer } = movie;
  return (
    <div className="card-overlay">
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
                      <div className="trailer-ticket-buttons-container">
                        <a href={trailer} className="trailer-btn-container" target="_blank">
                          <div className="trailer-btn icons">
                            <div className="trailer-btn-background"></div>
                          </div>
                          <p>Ver trailer</p>
                        </a>
                      </div>
                    </div>
                    <div className="col colCarousel">
                      <a href="#formu" className="trailer-ticket-buttons-container">
                        <div className="ticket-btn-container">
                          <div className="ticket-btn icons">
                            <div className="ticket-btn-background"></div>
                          </div>
                          <p> Comprar ticket</p>
                        </div>
                      </a>
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
