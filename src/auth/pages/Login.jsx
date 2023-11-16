import { AuthLayout } from "../layout/AuthLayout"
import './Login.css'
import {Link} from 'react-router-dom';

export const Login = () => {
  return (
    <AuthLayout title="Login">

      <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
  <label>Correo</label>
  </div>
  <div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
  <label>Contraseña</label>
</div>
<br />
<button className="btn btn-dark"><i className="bi bi-box-arrow-right"></i> Ingresar</button>
<div className="row">
<Link to="/auth/register">Crear una cuenta</Link>
</div>
    </AuthLayout>
  )
}
