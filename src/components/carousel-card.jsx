import PropTypes from "prop-types";

CarouselCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
  }).isRequired,
};
function CarouselCard({ movie }) {
  const { title, description, imageSrc } = movie;
  return (
    <div className="card-overlay">
      <div className="card-content">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={imageSrc}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body card-carou">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
              </div>
              <div className="buttons-carousel">
                {/*
                 <div className="trailer-btn-container">
                  <div className="trailer-btn">
                    <div className="trailer-btn-background"></div>
                  </div>
                  <p>
                    Ver trailer
                  </p>
                </div>
                <div className="ticket-btn-container">
                  <div className="ticket-btn">
                    <div className="ticket-btn-background"></div>
                  </div>
                  Dejar reseña
                </div> 
                */}
                <div className="container">
                  <div className="row">
                    <div className="col">
                      <div className="trailer-ticket-buttons-container">
                      <div className="trailer-btn-container">
                  <div className="trailer-btn">
                    <div className="trailer-btn-background"></div>
                  </div>
                  <p>
                    Ver trailer
                  </p>
                </div>
                      </div>
                    </div>
                    <div className="col">
                    <div className="trailer-ticket-buttons-container">
                      <div className="ticket-btn-container">
                  <div className="ticket-btn">
                    <div className="ticket-btn-background"></div>
                  </div>
                  Dejar reseña
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