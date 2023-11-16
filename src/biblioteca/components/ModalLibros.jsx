import { useState } from "react";
import { Modal, Button } from 'react-bootstrap';
import { Alerta } from "./Alerta";

export const ModalLibros = ({ show, handleClose, titulo='Agregar Libro' }) => {
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
     <Alerta show={showToast} onClose={handleCloseToast} message="Libro agregado correctamente." />
     <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="mb-3">
        <label  className="form-label">Titulo</label>
        <input type="text" className="form-control" id="exampleFormControlInput1"/>
      </div>
      <div className="mb-3">
        <label  className="form-label">Autor</label>
        <input type="text" className="form-control" id="exampleFormControlInput1"/>
      </div>
      <div className="mb-3">
        <label  className="form-label">Imagen</label>
        <input className="form-control" type="file" id="formFile"/>
      </div>
      <div className="mb-3">
        <label  className="form-label">Descripcion</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div className="mb-3">
      <div className="form-check form-switch">
      <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
      <label className="form-check-label">Disponible</label>
    </div>
      </div>
     
      </Modal.Body>
      <Modal.Footer>
       
            <div className="col"><Button variant="danger" onClick={handleClose}>
          Cancelar
        </Button></div>
            <div className="col"> <Button variant="success" onClick={()=> {handleClose();handleShowToast()}}>
          Guardar
        </Button>
        </div>
       
      </Modal.Footer>
    </Modal>
    </>
   
  )
}
