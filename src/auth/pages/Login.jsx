import { AuthLayout } from "../layout/AuthLayout"
import './Login.css'
import {Link} from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import {useDispatch, useSelector} from 'react-redux';
import { checkingAuth, startLogin } from '../../store/auth/thunks';
import { useMemo } from 'react';

const formData = {
  email: '',
  password: ''
};

export const Login = () => {

  const {status, errorMessage} = useSelector(state=> state.auth);

  const dispatch= useDispatch();
  const {email, password, onInputChange} = useForm(formData);

  const isAuthenticating = useMemo(()=>status ==='checking', [status]);

  const onSubmit = (event)=> {
    event.preventDefault();
    dispatch(startLogin({email,password}));
    
  }

  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>

      <div className="form-floating mb-3">
  <input type="email" className="form-control" id="floatingInput"
  value={email} name='email' onChange={onInputChange}/>
  <label>Correo</label>
  </div>
  <div className="form-floating">
  <input type="password" className="form-control" id="floatingPassword"
  value={password} onChange={onInputChange} name='password'/>
  <label>Contraseña</label>
</div>
<br />
<div className="alert alert-danger" role="alert" 
style={{ display: !!errorMessage ? '' : 'none' }}>
  {errorMessage}
</div>
<br />
<button disabled={isAuthenticating} type="submit" className="btn btn-dark"><i className="bi bi-box-arrow-right"></i> Ingresar</button>
<div className="row">
<Link to="/auth/register">Crear una cuenta</Link>
</div>
      </form>
    </AuthLayout>
  )
}
