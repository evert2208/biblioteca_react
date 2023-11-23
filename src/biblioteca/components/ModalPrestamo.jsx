import { useEffect, useState } from "react"
import { Alerta } from "./Alerta";
import { Modal, Button } from 'react-bootstrap';
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux"
import { startDeletingPrestamo, startNewPrestado, setActivoLibro } from "../../store/biblioteca";


export const ModalPrestamo = ({ show, handleClose,tipo}) => {
    const [showToast, setShowToast] = useState(false);
    const dispatch = useDispatch();
    const {activo, saveMessage, isSaving}= useSelector(state=>state.biblio);

    const {descripcion, titulo, autor,año,id, disponibilidad, onInputChange, onResetForm, formState} = useForm(activo);
    
    useEffect(() => {
        dispatch(setActivoLibro(formState));
     }, [formState]);
     
     const onSavePrestar = ()=> {
  
        dispatch(startNewPrestado());
        if(!isSaving){
            handleClose();
            // handleShowToast();
            // onResetForm();
    
        }
       
      }
      const onSaveDevolver = ()=> {
  
        dispatch(startDeletingPrestamo());
        if(!isSaving){
            handleClose();
            // handleShowToast();
            // onResetForm();
    
        }
       
      }

      const onSaveLibro = ()=> {
        if(tipo==='disponible'){
            
            onSavePrestar();
        }else if(tipo==='prestamo'){
            onSaveDevolver();
        }
      }

      useEffect(()=> {
        if(saveMessage.length>0){
          // Swal.fire('Nota actualizada', saveMessage, 'success');
          handleClose();
          // handleShowToast();
        }
      },[saveMessage])
    const handleShowToast = () => {
      setShowToast(true);
    };
  
    const handleCloseToast = () => {
      setShowToast(false);
      handleClose;
    };
  return (
    <>
    {/* <Alerta show={showToast} onClose={handleCloseToast} message={saveMessage} /> */}
   <Modal show={show} onHide={handleClose}>
   <Modal.Header closeButton>
     <Modal.Title>
        {(tipo==='disponible')&& "Prestar"}
        {(tipo==='prestamo')&& "Devolver"}
     </Modal.Title>
   </Modal.Header>
   <Modal.Body id='body'>
    {(tipo==='disponible')&& (<h5>¿Desea prestar este libro?</h5>)}
    {(tipo==='prestamo')&& (<h5>¿Desea devolver este libro?</h5>)}
   </Modal.Body>
   <Modal.Footer>
    
         <div className="col"><Button variant="danger" onClick={handleClose}>
       No
     </Button></div>
         <div className="col"> <Button variant="success"  onClick={onSaveLibro} disabled={isSaving}>
       Si
     </Button>
     </div>
   </Modal.Footer>
 </Modal>

   </>
  )
}
