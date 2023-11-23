import { Link, NavLink, useNavigate } from 'react-router-dom';
import '../css/Navbar.css';
import { useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import { startLogout } from "../../store/auth/thunks"

export const Navbar = () => {

  const {displayName, status}=useSelector(state=>state.auth);
  const dispatch = useDispatch()
  const onLogout = ()=> {
      dispatch(startLogout());
  }

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
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>
                     </li>
                      {
                        (status==='authenticado')&&(
                          <li className="nav-item">
                          <NavLink 
                            className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                            to="/prestamos"
                        >
                            Prestamos
                        </NavLink>
                         </li>
                        )
                      }
                     {
                        (status==='authenticado')&&(
                          <li className="nav-item">
                      <NavLink 
                        className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                        to="/consultas"
                    >
                       Consultas
                    </NavLink>
                     </li>
                        )
                      }

                      {
                        (displayName==='Admin' && status==='authenticado')&&(<li className="nav-item">
                        <NavLink 
                          className={ ({isActive})=> `nav-item nav-link ${isActive ? 'active':''}`} 
                          to="/gestion-de-libros"
                      >
                          Gestion de Libros
                      </NavLink>
                       </li>)
                      }
                     
        
      </ul>
      <ul className=" navbar-nav me-5 mb-5 mb-lg-0 d-flex justify-content-end" id="logout">
                <li className="nav-item dropdown">
                
                {
                   (status==='authenticado')&&(
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                       <i className="bi bi-person-gear"></i> {displayName}
                </a>
                   )
                }
                {
                  (status==='no-authenticado')&&(
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-person-fill-lock"></i> Acceder
                  </a> 
                  )
                }
               
                <ul className="dropdown-menu">
                  {
                    (status==='authenticado')&&(
                      <li><a className="dropdown-item cursor" onClick={onLogout}><i className="bi bi-box-arrow-right"></i> Cerrar Seccion</a></li>
                    )
                  }
                   {
                    (status==='no-authenticado')&&(
                      <li> <Link className="dropdown-item cursor" to="/auth/login"><i className="bi bi-box-arrow-right"></i> Iniciar Seccion</Link></li>
                    )
                   }
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
