
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useMemo, useRef, useState } from "react"
import { Modal, Button } from 'react-bootstrap';
import '../css/ModalEliminarLibro.css';
import { Alerta } from "./Alerta";
import { startDeletingLibro } from "../../store/biblioteca/thunks";
import { useForm } from "../../hooks/useForm";
import { setActivoLibro } from "../../store/biblioteca/biblioSlice";

export const ModalEliminarLibro = ({ show, handleClose}) => {

  const dispatch = useDispatch();
  const {activo:Libro, saveMessage, isSaving}= useSelector(state=>state.biblio)
  const {descripcion, titulo, autor, disponibilidad,
    onInputChange, formState} = useForm(Libro);

    useEffect(() => {
      dispatch(setActivoLibro(formState));
   }, [formState]);
   
  const [showToast, setShowToast] = useState(false);
  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
    handleClose;
  };

  const onDelete = ()=> {
    dispatch(startDeletingLibro());
    handleShowToast();
  }
  return (
    <>
     <Alerta show={showToast} onClose={handleCloseToast} message="Libro eliminado correctamente." />
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Eliminar Libro</Modal.Title>
    </Modal.Header>
    <Modal.Body id='body'>
      <h5>¿Desea eliminar el libro {titulo}?</h5>
    </Modal.Body>
    <Modal.Footer>
     
          <div className="col"><Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button></div>
          <div className="col"> <Button variant="danger" onClick={()=> {handleClose();onDelete()}}>
        Eliminar
      </Button>
      </div>
    </Modal.Footer>
  </Modal>
 
    </>
    
  )
}
