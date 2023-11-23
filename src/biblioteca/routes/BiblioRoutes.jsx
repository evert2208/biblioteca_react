import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/Home"
import { Prestamos } from "../pages/Prestamos"
import { Navbar } from '../components/Navbar'
import { GestionLibros } from "../pages/GestionLibros"
import { Busqueda } from "../pages/Busqueda"
import { Footer } from "../components/Footer"
import { useCheckAuth } from "../../hooks"
import { CheckingAuth } from "../../ui/components/CheckingAuth"
import { AuthRoutes } from "../../auth/routes/AuthRoutes"

export const BiblioRoutes = () => {
  const {displayName, status} = useCheckAuth();
  if(status==='checking') {
    return <CheckingAuth/>
  }
  return (
    <>
     <Navbar/>
     <div>
     <Routes>
    <Route path="/inicio" element={<Home/>}/>
    {
      (status==='no-authenticado')&&( 
      <Route path="/auth/*" element={<AuthRoutes/>}/> )
    }
    {
      (status==='authenticado')&&(
      <>
      <Route path="/prestamos" element={<Prestamos/>}/>
      </>
      )
    }
    
    {
      (displayName==='Admin' && status==='authenticado')&&( <Route path="/gestion-de-libros" element={<GestionLibros/>}/>)
    }
    {
      (status==='authenticado')&&(<Route path="/consultas" element={<Busqueda/>}/>)
    }
    
    <Route path="/*" element={<Navigate to="/inicio"/>}/>
   </Routes>
   <Footer/>
     </div>
     
    
   </>
   
  )
}
