import React from "react";
import { movies } from "../utils/constants";

function Form() {
  const [pelicula, setPelicula] = React.useState("1");
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [resena, setResena] = React.useState("");
  const [formularioEnviado, setFormularioEnviado] = React.useState(false);

  const handleReset = () => {
    setPelicula("");
    setNombre("");
    setEmail("");
    setResena("");
  };

  const handleFinalizarClick = () => {
    // Validaciones
    if (nombre.length < 4) {
      alert("El nombre debe tener al menos 4 caracteres.");
      return;
    }

    if (!validateEmail(email)) {
      alert("El formato del email es inválido.");
      return;
    }

    if (resena.length < 10) {
      alert("La reseña debe tener al menos 10 caracteres.");
      return;
    }

   
    alert("Formulario enviado correctamente.");
    setFormularioEnviado(true);
  };

  // Función para validar el formato de email
  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  return (
    <>
      {!formularioEnviado ? (
        <form className="contain-form" onSubmit={handleFinalizarClick}>
          <h2 className="titles-form title">Reseña de películas</h2>
          <h3 className="titles-form subtitle">Deja tu opinión</h3>
          <div className="container form" id="formu">
            <div className="mb-3">
              <label htmlFor="pelicula" className="form-label">
                Seleccione película
              </label>
              <select
                id="pelicula-options"
                className="form-select form-custom form-control"
                aria-label="Default select example"
                value={pelicula}
                onChange={(e) => setPelicula(e.target.value)}
                required
              >
                <option value="">Seleccione una película</option>
                {movies.map((movie, index) => (
                  <option key={index} value={movie.Title}>
                    {movie.Title}
                  </option>
                ))}
              </select>
            </div>
            <div className="row">
              <div className="col-12 mb-3">
                <label htmlFor="nombre" className="form-label">
                  Nombre completo
                </label>
                <input
                  type="text"
                  className="form-control form-custom"
                  id="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-custom"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="resena" className="form-label">
                Reseña
              </label>
              <textarea
                className="form-control form-custom"
                id="resena"
                rows="3"
                value={resena}
                onChange={(e) => setResena(e.target.value)}
                required
              ></textarea>
            </div>
            <div className="row gx-5">
              <div className="col-12 col-md-12 col-lg-6">
                <div className="mb-3">
                  <button className="button-finalizar" type="submit">
                    Finalizar
                  </button>
            
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <div className="mb-3 div-reiniciar">
             
                  <button
                    type="reset"
                    className="btn btn-primary button-reiniciar"
                    onClick={handleReset}
                  >
                    Reiniciar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      ) : null}
      {formularioEnviado && (
        <div className="review">
          <p className="paragraph">Reseña de peliculas</p>
          <h4 className="thank">¡Muchas gracias {nombre}!</h4>
          <a className="star" href="#"></a>
          <p className="message">
            Tu reseña sobre la pelicula {pelicula} ha sido enviada.
          </p>
        </div>
      )}
    </>
  );
}

export default Form;
