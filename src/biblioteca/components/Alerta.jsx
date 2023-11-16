import { Toast } from 'react-bootstrap';
import '../css/Alerta.css';
export const Alerta = ({ show, onClose, message }) => {
  return (
    <Toast show={show} onClose={onClose} delay={3000} autohide id='Toast'>
    <Toast.Header id='Toast'>
      <strong className="mr-auto">Alerta!!!</strong>
      {/* <small className="text-muted">ahora mismo</small> */}
    </Toast.Header>
    <Toast.Body>{message}</Toast.Body>
  </Toast>
  )
}
