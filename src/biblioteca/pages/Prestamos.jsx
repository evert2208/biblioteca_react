import { BiblioLayout } from "../layout/biblioLayout"


export const Prestamos = () => {
  return (
    <BiblioLayout>
      <h1>
        PRESTAMOS Y DEVOLUCIONES
      </h1>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>Libros Disponibles</h4>
          </div>
          <div className="col-6">
            <h4>Libros Prestados</h4>
          </div>
        </div>
      </div>
    </BiblioLayout>
  )
}
