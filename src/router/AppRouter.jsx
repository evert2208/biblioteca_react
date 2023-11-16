import { Routes, Route, Navigate } from "react-router-dom"
import { BiblioRoutes } from "../biblioteca/routes/BiblioRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"

export const AppRouter = () => {
  return (
    <Routes>
    {/* {
      (status==='authenticated')
      ?<Route path="/*" element={<JournalRoutes/>}/>
      :<Route path="/auth/*" element={<AuthRoutes/>}/>
    } */}
    {/* <Route path="/*" element={<Navigate to='/auth/login'/>}/> */}
    <Route path="/auth/*" element={<AuthRoutes/>}/>
    <Route path="/*" element={<BiblioRoutes/>}/>
   </Routes>
  )
}
