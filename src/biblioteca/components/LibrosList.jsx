import React from 'react'

export const LibrosList = ({tipo}) => {
  return (
    <div className="accordion" id="accordionExample">
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Titulo
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body">
          <div className="row">
            
          <div className="col-2">Image</div>
          <div className="col">Descripcion</div>
          </div>
          <br />
          {
            (tipo==='prestamo') && (<button className="btn btn-primary">Devolver</button>)
          }
          {
            (tipo==='disponible') && (<button className="btn btn-primary">Prestar</button>)
          }
          
        </div>
      </div>
    </div>
  </div>
  )
}
