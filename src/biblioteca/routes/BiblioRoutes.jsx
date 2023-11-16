import { Routes, Route, Navigate } from "react-router-dom"
import { Home } from "../pages/Home"
import { Prestamos } from "../pages/Prestamos"
import { Navbar } from '../components/Navbar'
import { GestionLibros } from "../pages/GestionLibros"
import { Busqueda } from "../pages/Busqueda"
import { Footer } from "../components/Footer"

export const BiblioRoutes = () => {
  return (
    <>
     <Navbar/>
     <div>
     <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/prestamos" element={<Prestamos/>}/>
    <Route path="/gestion-de-libros" element={<GestionLibros/>}/>
    <Route path="/consultas" element={<Busqueda/>}/>
    <Route path="/*" element={<Navigate to="/"/>}/>
   </Routes>
   <Footer/>
     </div>
     
    
   </>
   
  )
}
