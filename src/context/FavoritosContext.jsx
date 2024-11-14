import { createContext, useContext, useState } from 'react'

const FavoritosContext = createContext()


export const FavoritosProvider = ({ children }) => {
  /* Logica para mantener favoritos y las funciones para agregar y eliminar */
  const [favoritos, setFavoritos] = useState([])
  const agregarAFavoritos = (receta) => {
    setFavoritos((prevFavoritos) => [...prevFavoritos, receta])
  }
  const eliminarDeFavoritos = (id) => {
    setFavoritos((prevFavoritos) => prevFavoritos.filter((receta) => receta.id !== id));
  };
  return (
    <FavoritosContext.Provider value={{ favoritos, agregarAFavoritos, eliminarDeFavoritos}}>
      {children}
    </FavoritosContext.Provider>
  )
}

export const useFavoritos = () => useContext(FavoritosContext)
