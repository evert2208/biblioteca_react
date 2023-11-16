import { LibrosList } from "../components/LibrosList"
import { BiblioLayout } from "../layout/biblioLayout"


export const Busqueda = () => {
  return (
    <BiblioLayout>
      <h1>CONSULTAR LIBROS</h1>
      <div className="container">
        <div className="row">
          <div className="col">
          <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Consultar" aria-describedby="basic-addon2"/>
          <span className="input-group-text" id="basic-addon2"><i className="bi bi-search"></i></span>
        </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
          <LibrosList tipo='consulta'/>
          </div>
        </div>
      </div>
    </BiblioLayout>
  )
}
