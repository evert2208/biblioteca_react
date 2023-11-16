import { BiblioLayout } from "../layout/biblioLayout"


export const Busqueda = () => {
  return (
    <BiblioLayout>
      <h1>CONSULTAR LIBROS</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <input type="text" className="form-control"/>
          </div>
        </div>
      </div>
    </BiblioLayout>
  )
}
