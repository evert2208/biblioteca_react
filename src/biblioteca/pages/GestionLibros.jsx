import { BiblioLayout } from "../layout/biblioLayout"
import '../css/GesionLibros.css'
import { useState } from "react";
import { ModalLibros } from "../components/ModalLibros";
import { ModalEliminarLibro } from "../components/ModalEliminarLibro";
import { Alerta } from "../components/Alerta";

export const GestionLibros = () => {

  var title='';
  const [showModal, setShowModal] = useState(false,'');
  const [showModalEliminar, setShowModalEliminar] = useState(false);


  const handleOpenModal = (titulo='') => {
    title=titulo;
    // console.log(title);
    setShowModal(true,titulo);
  };

  const handleOpenModalEliminar = () => {
    setShowModalEliminar(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCloseModalEliminar = () => {
    setShowModalEliminar(false);
  };



  return (
    <BiblioLayout>
      <div className="row">
      <div className="col pb-5">

<h1>GESTION DE LIBROS</h1>
</div>
  <div className="col">
      <ModalEliminarLibro show={showModalEliminar} handleClose={handleCloseModalEliminar}/>
      <ModalLibros show={showModal} handleClose={handleCloseModal} titulo={title}/>
  </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="row">
                <div className="col" id="agregar">
                <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Consultar" aria-describedby="basic-addon2"/>
          <span className="input-group-text" id="basic-addon2"><i className="bi bi-search"></i></span>
        </div>
                </div>
                <div className="col" id="agregar">
                  <button className="btn btn-secondary" onClick={()=>handleOpenModal('Agregar Libro')} >Agregar libro</button>
                </div>
              </div>
            <table className="table table-responsive">
      <thead>
    <tr>
      <th scope="col">Imagen</th>
      <th scope="col">Nombre</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td><a id="accion" onClick={()=>handleOpenModal('Editar Libro')}><i className="bi bi-pencil-square"></i></a>
      <a id="accion" onClick={()=>handleOpenModalEliminar()}><i className="bi bi-trash3-fill"></i></a></td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td >Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
       
            </div>
          </div>
        </div>
      </div>
    
    </BiblioLayout>
  )
}
