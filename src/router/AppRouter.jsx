import { Routes, Route, Navigate } from "react-router-dom"
import { BiblioRoutes } from "../biblioteca/routes/BiblioRoutes"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { useCheckAuth } from "../hooks"
import { CheckingAuth } from "../ui/components/CheckingAuth"

export const AppRouter = () => {

  const {status} = useCheckAuth();
  if(status==='checking') {
    return <CheckingAuth/>
  }

  return (
    <Routes>
    {/* {
      (status==='authenticado')
      ?<Route path="/*" element={<BiblioRoutes/>}/>
      // :<Route path="/auth/*" element={<AuthRoutes/>}/>
      : <Route path="/" element={<Navigate to='/inicio'/>}/>
    } */}
    {/* {
       (status==='authenticado')&&(<Route path="/*" element={<BiblioRoutes/>}/>)
    } */}
    
    {
      (status==='no-authenticado')&&(
       
        <Route path="/*" element={<BiblioRoutes/>}/>      
      )
    }
    {
      (status==='authenticado')&&(
        <Route path="/*" element={<BiblioRoutes/>}/>
      )
    }
    {/* <Route path="/auth/*" element={<AuthRoutes/>}/> */}
    {/* <Route path="/*" element={<Navigate to='/'/>}/> */}
    {/* <Route path="/*" element={<Navigate to='/auth/login'/>}/> */}
    {/* <Route path="/auth/*" element={<AuthRoutes/>}/>
    <Route path="/*" element={<BiblioRoutes/>}/> */}
   </Routes>
  )
}
