import { AuthLayout } from "../layout/AuthLayout"
import {Link} from 'react-router-dom';

export const Register = () => {
  return (
    <AuthLayout title="Registro">
      <div className="form-floating mb-3">
  <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label>Nombre y Apellido</label>
  </div>
      <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label>Correo</label>
  </div>
  <div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label>Contraseña</label>
</div>
<br />
<button className="btn btn-dark"><i className="bi bi-box-arrow-right"></i> Registrar</button>
<div className="row">
  <p>Ya tienes Cuenta? <Link to="/auth/login">Ingresar</Link></p>

</div>
    </AuthLayout>
  )
}
