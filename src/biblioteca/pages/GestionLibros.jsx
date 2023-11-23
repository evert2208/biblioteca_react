import { BiblioLayout } from "../layout/biblioLayout"
import {useSelector, useDispatch} from 'react-redux'
import '../css/GesionLibros.css'
import { useState } from "react";
import { ModalLibros } from "../components/ModalLibros";
import { ModalEliminarLibro } from "../components/ModalEliminarLibro";
import { startNewLibro } from "../../store/biblioteca/thunks";
import { setActivoLibro } from "../../store/biblioteca/biblioSlice";
import { ModalAgregarLibros } from "../components/ModalAgregarLibros";


export const GestionLibros = () => {
  const dispatch= useDispatch();
  const {Libros=[]}=useSelector(state=>state.biblio);
  
 
  // console.log(Libros);
  var title='';
  const [libro, setLibro] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [showModalAgregar, setShowModalAgregar] = useState(false);
  const [showModalEliminar, setShowModalEliminar] = useState(false);

  const onClickNewLibro = ()=> {
    // dispatch(startNewLibro());
  }

  const onClickLibro = ({descripcion, titulo, autor, disponibilidad,id})=> {
    dispatch(setActivoLibro({descripcion, titulo, autor, disponibilidad, id}));
    // console.log({descripcion, titulo, autor, disponibilidad})
}

  const handleOpenModal = (libro) => {
    setLibro(libro)
    setShowModal(true);
  };

  const handleOpenModalAgregar = () => {
    
    setShowModalAgregar(true);
  };

  const handleOpenModalEliminar = () => {
    setShowModalEliminar(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleCloseModalAgregar = () => {
    setShowModalAgregar(false);
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
      <ModalLibros show={showModal} handleClose={handleCloseModal} libro={libro}/>
      <ModalAgregarLibros show={showModalAgregar} handleClose={handleCloseModalAgregar}/>
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
                  <button className="btn btn-secondary" onClick={()=>{handleOpenModalAgregar();onClickNewLibro()}} >Agregar libro</button>
                </div>
              </div>
            <table className="table table-responsive">
      <thead>
    <tr>
      <th scope="col">Titulo</th>
      <th scope="col">Autor</th>
      <th scope="col">Descripcion</th>
      <th scope="col">Accion</th>
    </tr>
  </thead>
  <tbody>

    {
      Libros.map(libro => (
        <tr key={libro.id}>
        <th scope="row">{libro.titulo}</th>
        <td>{libro.autor}</td>
        <td>{libro.descripcion}</td>
        <td><a id="accion" onClick={()=>{handleOpenModal(libro); onClickLibro(libro)}}><i className="bi bi-pencil-square"></i></a>
        <a id="accion" onClick={()=>{handleOpenModalEliminar();  onClickLibro(libro)}}><i className="bi bi-trash3-fill"></i></a></td>
      </tr>
      ))
    }
  
  
  </tbody>
</table>
       
            </div>
          </div>
        </div>
      </div>
    
    </BiblioLayout>
  )
}
