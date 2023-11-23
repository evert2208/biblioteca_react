import { useSelector } from 'react-redux'


export const getLibroByTitulo = (titulo = '') => {

    const { Libros = [] } = useSelector(state => state.biblio);

    titulo = titulo.toLocaleLowerCase().trim();
    if (titulo.length === 0) return [];

    return Libros.filter(
        z => z.titulo.toLocaleLowerCase().includes(titulo));

}