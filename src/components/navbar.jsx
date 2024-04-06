import React  from 'react';

function Navbar() {

  const [activeLink, setActiveLink] = React.useState(null);

  const handleLinkClick = (index) => {
    setActiveLink(index);
  };

  return (
    <div className="nav-container">
 <nav className="navbar navbar-expand-lg">
  <div className="container">
    <a className="navbar-brand logo" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className={`nav-link ${activeLink === 0 ? 'bold' : ''}`} onClick={() => handleLinkClick(0)} href="#destacadas">Destacadas</a>
        </li>
        <li className="nav-item">
          <a className={`nav-link ${activeLink === 1 ? 'bold' : ''}`} onClick={() => handleLinkClick(1)} href="#cartelera">Cartelera</a>
        </li>
        <li className="nav-item">
          <a href="#formu" className="button-3">Dejar reseña</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </div>
  );
}

export default Navbar;
