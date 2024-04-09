import CarouselCard from "./carousel-card";
import { movies } from "../utils/constants";
function Carousel() {
  return (
    <>
      <div id="destacadas">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div id="indicators" className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div>
                <div className="background-image">
                  <img
                    src={movies[movies.length - 1].Images[0]}
                    className="d-block w-100 car-img"
                    alt="Imagen"
                  />
                </div>
                <CarouselCard
                  movie={{
                    title: movies[movies.length - 1].Title,
                    description: movies[movies.length - 1].Plot,
                    imageSrc: movies[movies.length - 1].Poster,
                    trailer: movies[movies.length - 1].Trailer,
                  }}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <div>
                <div className="background-image">
                  <img
                    src={movies[(movies.length/2) -1].Images[0]}
                    className="d-block w-100 car-img"
                    alt="Imagen"
                  />
                </div>
                <CarouselCard
                  movie={{
                    title: movies[(movies.length / 2) -1].Title,
                    description: movies[(movies.length/2) -1].Plot,
                    imageSrc: movies[(movies.length/2) -1].Poster,
                    trailer: movies[(movies.length/2) -1].Trailer,
                  }}
                />
              </div>
            </div>
            <div className="carousel-item active">
              <div>
                <div className="background-image">
                  <img
                    src={movies[10].Images[0]}
                    className="d-block w-100 car-img"
                    alt="Imagen"
                  />
                </div>
                <CarouselCard
                  movie={{
                    title: movies[10].Title,
                    description: movies[10].Plot,
                    imageSrc: movies[10].Poster,
                    trailer: movies[10].Trailer,
                  }}
                />
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default Carousel;
