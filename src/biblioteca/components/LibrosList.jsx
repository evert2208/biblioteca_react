import React, { useEffect } from 'react'
import { LibroCard } from './LibroCard';
import {useDispatch, useSelector} from 'react-redux';
import { startLoadingLibro } from '../../store/biblioteca';


export const LibrosList = ({tipo}) => {
  const dispatch = useDispatch();
  const {Libros=[], Prestados=[]}=useSelector(state=>state.biblio);
  useEffect(()=> {
    dispatch(startLoadingLibro());
  },[Prestados])
  // console.log(Libros, Prestados);
  
  return (

  <>
  <div className="row rows-cols-1 row-cols-md-2 g-3">
  
  {
    (tipo==='disponible')&&(
      Libros.filter(x=>x.disponibilidad===true).map(libro => (
        <LibroCard key={libro.id} {...libro} tipo={tipo}/>
      ))
    )
    
  }
  {
    (tipo==='prestamo')&&(
      Prestados.map( prestado => (
        <LibroCard key={prestado.id} {...prestado} tipo={tipo}/>
      ))
    )
  }
</div>
</>
  )
}
