
import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import '../css/ModalEliminarLibro.css';
import { Alerta } from "./Alerta";

export const ModalEliminarLibro = ({ show, handleClose}) => {

  const [showToast, setShowToast] = useState(false);
  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
    handleClose;
  };

  return (
    <>
     <Alerta show={showToast} onClose={handleCloseToast} message="Libro eliminado correctamente." />
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Eliminar Libro</Modal.Title>
    </Modal.Header>
    <Modal.Body id='body'>
      <h5>¿Desea eliminar este libro?</h5>
    </Modal.Body>
    <Modal.Footer>
     
          <div className="col"><Button variant="secondary" onClick={handleClose}>
        Cancelar
      </Button></div>
          <div className="col"> <Button variant="danger" onClick={()=> {handleClose();handleShowToast()}}>
        Eliminar
      </Button>
      </div>
    </Modal.Footer>
  </Modal>
 
    </>
    
  )
}
