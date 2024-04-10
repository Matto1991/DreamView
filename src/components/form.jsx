import React from "react";
import { movies } from "../utils/constants";

function Form() {
  const [pelicula, setPelicula] = React.useState("");
  const [funcion, setFuncion] = React.useState("");
  const [asiento, setAsiento] = React.useState("");
  const [nombre, setNombre] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [telefono, setTelefono] = React.useState("");
  const [finalmsg, setFinalmsg] = React.useState("");

   const [step, setStep] = React.useState(0); 
   


  const handleReset = () => {
    setPelicula("");
    setFuncion("");
    setAsiento("");
  };

  const handleFinalizarClick = () => {
    
    if (!pelicula) {
      alert("Por favor seleccione una película.");
      return;
    }

    if (!funcion) {
      alert("Por favor seleccione una función.");
      return;
    }

    if (!asiento) {
      alert("Por favor seleccione un asiento.");
      return;
    }

        setStep(1);

  };

   
   const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  const formatFuncion = (funcion) => {

    const regex = /(\d{1,2}\/\d{1,2}\/\d{4})\s(\d{1,2}:\d{2})/;
  
    const matches = funcion.match(regex);
  
    if (matches && matches.length === 3) {
      const fecha = matches[1]; // Obtener la fecha
      const hora = matches[2];  // Obtener la hora
      
      const fechaYHora = { fecha, hora };
  
      setFuncion(fechaYHora);
  
      return fechaYHora;
    } else {

      console.error("Formato de fecha y hora incorrecto.");
      return null;
    }
  };
  const handleFinalizarClick2 = () => {
    if (nombre.length < 4) {
      alert("El nombre debe tener al menos 4 caracteres.");
      return;
    }

    if (!validateEmail(email)) {
      alert("El formato del email es inválido.");
      return;
    }

    if (!validatePhone(telefono)) {
      alert("El formato del teléfono es inválido.");
      return;
    }

 setStep(2);
  const {fecha, hora} = formatFuncion(funcion)
  
  setFinalmsg("Tu entrada para la función " + fecha + " a las " + hora);
  };

   const validatePhone = (phone) => {
    const re = /^\d{3}-\d{3}-\d{3}$/;
    return re.test(phone);
  };
  
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, "");
    const formattedPhoneNumber = phoneNumber.replace(/(\d{3})(\d{3})(\d{3})/, "$1-$2-$3");
    return formattedPhoneNumber;
  };
  
  const handleTelefonoChange = (e) => {
    const inputValue = e.target.value;
    const formattedValue = formatPhoneNumber(inputValue);
    setTelefono(formattedValue);
  };
  
  


  return (
    <>
     
        {step === 0 ? <form className="contain-form" onSubmit={handleFinalizarClick}>
          <h2 className="titles-form title">Comprar ticket</h2>
          <h3 className="titles-form subtitle">Seleccione una función</h3>
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
            <div className="mb-3">
              <label htmlFor="funcion" className="form-label">
                Seleccione función
              </label>
              <select
                id="funcion-options"
                className="form-select form-custom form-control"
                aria-label="Default select example"
                value={funcion}
                onChange={(e) => setFuncion(e.target.value)}
                required
              >
                <option value="">Seleccione una función</option>
                <option value="30/10/2023 14:00">30/10/2023 14:00</option>
                <option value="01/11/2023 15:00">01/11/2023 15:00</option>
                <option value="25/9/2023 16:00">25/9/2023 16:00</option>
                <option value="02/8/2023 17:00">02/8/2023 17:00</option>
                <option value="26/10/2023 18:00">26/10/2023 18:00</option>
                <option value="27/10/2023 19:00">27/10/2023 19:00</option>
                <option value="28/10/2023 22:00">28/10/2023 22:00</option>

              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="asiento" className="form-label">
                Seleccione asiento
              </label>
              <select
                id="asiento-options"
                className="form-select form-custom form-control"
                aria-label="Default select example"
                value={asiento}
                onChange={(e) => setAsiento(e.target.value)}
                required
              >
                <option value="">Seleccione un asiento</option>
                <option type value="Fila 1 - Asiento 1">Fila 1 - Asiento 1</option>
                <option value="Fila 1 - Asiento 2">Fila 1 - Asiento 2</option>
                <option value="Fila 1 - Asiento 3">Fila 1 - Asiento 3</option>
                <option value="Fila 3 - Asiento 4">Fila 3 - Asiento 4</option>
                <option value="Fila 3 - Asiento 9">Fila 3 - Asiento 9</option>
                <option value="Fila 5 - Asiento 10">Fila 5 - Asiento 10</option>
              </select>
              
            </div>

          

            <div className="row gx-5">
              <div className="col-12 col-md-12 col-lg-6">
                <div className="mb-3">
                  <button className="button-finalizar" type="submit">
                    Continuar
                  </button>
                </div>
              </div>
              <div className="col-12 col-md-12 col-lg-6">
                <div className="mb-3 buttton-reiniciar">
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
        </form>:null}
    
   
  {step === 1 ?<form className="contain-form" onSubmit={handleFinalizarClick2}>
    <h2 className="titles-form title">Comprar ticket</h2>
    <h3 className="titles-form subtitle">
      Completa tu información personal
    </h3>
    <div className="container form" id="formu2">
      <div className="mb-3">
        <label htmlFor="nombre2" className="form-label">
          Nombre
        </label>
        <input
          type="text"
          className="form-select form-custom form-control"
          id="nombre2"
          placeholder="Ingrese su nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email2" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-select form-custom form-control"
          id="email2"
          placeholder="Ingrese su email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="telefono" className="form-label">
          Teléfono
        </label>
        <input
          type="tel"
          className="form-select form-custom form-control"
          id="telefono"
          placeholder="Ingrese su teléfono"
          value={telefono}
          onChange={handleTelefonoChange}
          required
        />
      </div>
      <div className="row gx-5">
        <div className="col-12 col-md-12 col-lg-6">
          <div className="mb-3">
            <button className="button-finalizar" type="submit">
              Continuar
            </button>
          </div>
        </div>
        <div className="col-12 col-md-12 col-lg-6">
          <div className="mb-3 buttton-reiniciar">
            <button
              type="reset"
              className="btn btn-primary button-reiniciar"
              onClick={handleReset}
            >
              Volver
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>:null}



  {step === 2 ? 
   <div className="review">
   <p className="paragraph">Comprar ticket</p>
   <h4 className="thank">¡Felicitaciones {nombre}!</h4>
   <a className="ticket" href="#"></a>
   <p className="message">
  {finalmsg}
   </p>
   <p className="message">
   ha sido canjeada.
   </p>
   <p className="message">
   Te esperamos
   </p>
 </div>:null}


    </>
  );
}

export default Form;
