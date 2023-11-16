
import './Biblio.css';
export const BiblioLayout = ({children}) => {
  return (
     <div  id='container'>
     <div className="container animate__animated animate__fadeIn animate__faster">
        {children}
    </div>
     </div>
  )
}
