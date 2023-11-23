import { LibrosList } from "../components/LibrosList"
import { BiblioLayout } from "../layout/biblioLayout"
import { useForm } from "../../hooks/useForm"
import {useNavigate, useLocation} from "react-router-dom"
import queryString from 'query-string';
import { getLibroByTitulo } from "../../helpers/getLibroByTitulo";
import { LibroCard } from "../components/LibroCard";

export const Busqueda = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q=''} = queryString.parse(location.search);

  const libros = getLibroByTitulo(q);

  const {searchText, onInputChange} = useForm({
    searchText: q
  });

  const onSearchSubmit = (event)=> {
    event.preventDefault();
    // if(searchText.trim().length<=1) return;
    navigate(`?q=${searchText}`);
  } 
  return (
    <BiblioLayout>
      <h1>CONSULTAR LIBROS</h1>
      <div className="container">
        <div className="row">
          <div className="col">
          <form onSubmit={onSearchSubmit}>
          <div className="input-group mb-3">
          <input type="text" placeholder="Titulo del libro" 
            className="form-control" 
            name="searchText"
            autoComplete="off"
            value={searchText}
            onChange={onInputChange}/>
          <span className="input-group-text" id="basic-addon2"><i className="bi bi-search"></i></span>
        </div> 
        {/* <button className="btn btn-outline-primary mt-2">Search</button> */}
      
      </form>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
          {
              (q==='') ? <div className="alert alert-primary">
              Consultar libro
            </div>
            : (libros.length===0) && 
            <div className="alert alert-danger">
            el libro <b>{q}</b> no se encontro
          </div>
            }
            {
              libros.map(libro=>(

                <LibroCard key={libro.id} {...libro}/>
              ))
            }
          </div>
        </div>
      </div>
    </BiblioLayout>
  )
}
