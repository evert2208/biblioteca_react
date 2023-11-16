import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
  <div className="container-fluid">
    <img src="../../../public/assets/logo1cuc.png" alt="" id="img"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <NavLink 
                        className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                        to="/"
                    >
                        Inicio
                    </NavLink>
                     </li>

                      <li className="nav-item">
                      <NavLink 
                        className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                        to="/prestamos"
                    >
                        Prestamos
                    </NavLink>
                     </li>

                     <li className="nav-item">
                      <NavLink 
                        className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                        to="/consultas"
                    >
                       Consultas
                    </NavLink>
                     </li>

                     <li className="nav-item">
                      <NavLink 
                        className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                        to="/gestion-de-libros"
                    >
                        Gestion de Libros
                    </NavLink>
                     </li>
        
      </ul>
      <ul className=" navbar-nav me-5 mb-5 mb-lg-0 d-flex justify-content-end" id="logout">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-person-gear"></i> Admin
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right"></i> Cerrar Seccion</a></li>
                </ul>
                </li>
                </ul>
    </div>
    {/* <div className="navbar-collapse collapse w-50 order-2 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto" id="logout">
                <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Admin
                </a>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Cerrar Seccion</a></li>
                </ul>
                </li>
                </ul>
            </div> */}
  </div>
</nav>
  )
}
