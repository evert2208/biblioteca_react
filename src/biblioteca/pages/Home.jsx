import '../css/Home.css'
import { BiblioLayout } from '../layout/biblioLayout'
export const Home = () => {
  return (
    <BiblioLayout>
      <div className="container">
        <img id="bienvenido" src="../../../public/assets/bienvenidos.png" alt="" />
        <div className="row">
          <div className="col-6">
            <img className='home' src="../../../public/assets/banner-competencias_Mesa-de-trabajo-2.png" alt="" />
          </div>
          <div className="col-6">
            <h2><strong>Misión</strong></h2>
            <p>Potenciar el aprendizaje en los 
              estudiantes y el ejercicio de la 
              función docente e investigativa, mediante el acceso efectivo a los recursos de información 
              y la provisión de escenarios físicos y virtuales, que respondan a los diferentes estilos de aprendizaje y que promueva la visibilidad académica y científica generada en la Universidad.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <h2><strong>Visión</strong></h2>
            <p>Ser el servicio académico de la 
              Universidad de la Costa, más utilizado por la comunidad universitaria interna y externa.</p>
          </div>
          <div className="col-6">
          <img className='home' src="../../../public/assets/CERTIFICADOS-ACADEMICOS.jpg" alt="" />
          </div>
        </div>
      </div>
    </BiblioLayout>
  )
}
