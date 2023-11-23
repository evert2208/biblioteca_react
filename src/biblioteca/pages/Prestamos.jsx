import { LibroCard } from "../components/LibroCard";
import { LibrosList } from "../components/LibrosList"
import { BiblioLayout } from "../layout/biblioLayout"
import {useSelector} from 'react-redux'
import '../css/Prestamo.css'
import { ModalPrestamo } from "../components/ModalPrestamo";
import { Alerta } from "../components/Alerta";
import { useEffect, useState } from "react";

export const Prestamos = () => {

  const [showToast, setShowToast] = useState(false);
  const {Libros=[],  saveMessage}=useSelector(state=>state.biblio);
  
  // console.log(Libros)
 
  useEffect(()=> {
    if(saveMessage.length>0){
      // Swal.fire('Nota actualizada', saveMessage, 'success');
      // handleClose();
      handleShowToast();
    }
  },[saveMessage])

  const handleShowToast = () => {
    setShowToast(true);
  };

  const handleCloseToast = () => {
    setShowToast(false);
    
  };

  return (
    <BiblioLayout>
      <div className="row">
      <div className="col">

      <h1>
        PRESTAMOS Y DEVOLUCIONES
      </h1>
</div>
  <div className="col">
  <Alerta show={showToast} onClose={handleCloseToast} message={saveMessage} />
  </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h4>Libros Disponibles</h4>
            <hr />
            <div  id="margen">

                <LibrosList tipo="disponible"/>
            </div>
          </div>
          <div className="col-6">
            <h4>Libros Prestados</h4>
            <hr />
            <LibrosList tipo='prestamo'/>
          </div>
        </div>
      </div>
    </BiblioLayout>
  )
}
