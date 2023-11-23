import { Link } from "react-router-dom"
import { ModalPrestamo } from "./ModalPrestamo";
import { useState } from "react"
import {useSelector, useDispatch} from 'react-redux'
import { setActivoLibro } from "../../store/biblioteca/biblioSlice";


export const LibroCard = ({titulo, descripcion, autor, disponibilidad, tipo, id, año, Lb_id}) => {
    const dispatch= useDispatch();
    const [showModal, setShowModal] = useState(false);
   
  
    const handleOpenModal = () => {
      setShowModal(true);
    };
  
    const handleCloseModal = () => {
      setShowModal(false);
    };

    const onClickLibro = ()=> {
        dispatch(setActivoLibro({descripcion, titulo, autor, disponibilidad, id, año, Lb_id}));
        // console.log({descripcion, titulo, autor, disponibilidad})
    }
  return (
    <div className="col animate__animated animate__fadeIn">
        
        <div className="card">
            <div className="row">
            <ModalPrestamo show={showModal} handleClose={handleCloseModal} tipo={tipo}/>
                {/* <div className="col-4">
                    <img src={libro.imagen} className="card-img" alt={libro.titulo} />
                </div> */}
                <div className="col">
                    <div className="card-body">
                        <h5 className="card-title">{titulo}</h5>
                        <p className="card-text"><strong>Autor:</strong> {autor}</p>
                        <p className="card-text"><strong>Descripcion:</strong> {descripcion}</p>
                        {(disponibilidad)&&( <p className="card-text text-success"><strong>Disponible</strong></p>)}
                        {(!disponibilidad)&&( <p className="card-text text-danger"><strong>No Disponible</strong></p>)}
                        {
                                (tipo==='prestamo') && (<button onClick={()=>{handleOpenModal(); onClickLibro()}} className="btn btn-primary">Devolver</button>)
                            }
                            {
                                (tipo==='disponible') && (<button onClick={()=>{handleOpenModal(); onClickLibro()}} className="btn btn-primary">Prestar</button>)
                            }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
