import '../css/Footer.css'

export const Footer = () => {
  return (
    <footer id='footer'>
        <div className="container">
        <div className="row">
        <div className="col">
        <img src="../../../public/assets/Diseno-biblio.png" alt="" />
        <br />
        <h6><strong>Contacto</strong></h6>
        <p>Correo: biblioteca@cuc.edu.co
            Telefono: 3362248.
            Barranquilla, Colombia
            Calle 58 # 55- 66 Barrio Modelo</p>
        </div>
        <div className="col">
            <h6><strong>Accesos directos</strong></h6>
            <ul>
                <li>Bases de datos</li>
                <li>Investigación</li>
                <li>PQR</li>
                <li>Catálogo bibliográfico</li>
                <li>Publish or perish</li>
                <li>Booklick</li>
                <li>Libby</li>

            </ul>
        </div>
        <div className="col">
            <img className='img' src="../../../public/assets/Diseno-sin-titulo.png" alt="" />
        </div>
        </div>
        <div className="row text-center">
        Todos los derechos reservados
        </div>
        </div>
        
        
    </footer>
  )
}
