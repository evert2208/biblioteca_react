import { useState, useEffect, useMemo } from "react";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux"
import { Modal, Button } from 'react-bootstrap';
import { Alerta } from "./Alerta";
import { setActivoLibro } from "../../store/biblioteca/biblioSlice";
import { startDeletingLibro, startNewLibro, startSaveLibro } from "../../store/biblioteca/thunks";

const formData = {
  titulo: '',
  autor: '',
  descripcion: '',
  disponibilidad: true
};

export const ModalLibros = ({ show, handleClose, libro}) => {
// console.log(libro);
  // const [formSubmit, setformSubmit] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();

  const {activo, saveMessage, isSaving}= useSelector(state=>state.biblio);
  // console.log(activo);
  const {descripcion, titulo, autor, disponibilidad, onInputChange, formState} = useForm(libro);
    // console.log({descripcion, titulo, autor, disponibilidad});

  useEffect(() => {
     dispatch(setActivoLibro(formState));
  }, [formState]);
  
  const onSaveLibro = ()=> {
   
      dispatch(startSaveLibro())
    
  }

  useEffect(()=> {
    if(saveMessage.length>0){
      // Swal.fire('Nota actualizada', saveMessage, 'success');
      handleShowToast();
    }
  },[saveMessage])

  const onDelete = ()=> {
    dispatch(startDeletingLibro());
  }
  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
    handleClose;
  };

  return (
    <>
     <Alerta show={showToast} onClose={handleCloseToast} message="Libro agregado correctamente." />
     <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Editar</Modal.Title>
      </Modal.Header>
      {/* <form onSubmit={onSaveLibro}> */}

      <Modal.Body>
      <div className="mb-3">
        <label  className="form-label">Titulo</label>
        <input name="titulo" value={titulo} onChange={onInputChange} type="text" className="form-control"/>
      </div>
      <div className="mb-3">
        <label  className="form-label">Autor</label>
        <input name="autor" value={autor} onChange={onInputChange} type="text" className="form-control"/>
      </div>
      {/* <div className="mb-3">
        <label  className="form-label">Imagen</label>
        <input className="form-control" type="file" id="formFile"/>
      </div> */}
      <div className="mb-3">
        <label  className="form-label">Descripcion</label>
        <textarea name="descripcion" value={descripcion} onChange={onInputChange} className="form-control" rows="3"></textarea>
      </div>
      <div className="mb-3">
      <div className="form-check form-switch">
      <input name="disponibilidad" value={disponibilidad} onChange={onInputChange} className="form-check-input" type="checkbox" role="switch"/>
      <label className="form-check-label">Disponible</label>
    </div>
      </div>
     
      </Modal.Body>
      <Modal.Footer>
       
            <div className="col"><Button  disabled={isSaving} variant="danger" onClick={handleClose}>
          Cancelar
        </Button></div>
            <div className="col"> <Button variant="success" onClick={onSaveLibro} disabled={isSaving}>
          Guardar
        </Button>
        </div>
       
      </Modal.Footer>
      {/* </form> */}
    </Modal>
    </>
   
  )
}
