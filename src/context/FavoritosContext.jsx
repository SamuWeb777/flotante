import { createContext, useContext } from 'react'

const FavoritosContext = createContext()

export const FavoritosProvider = ({ children }) => {
  /* Logica para mantener favoritos y las funciones para agregar y eliminar */
  return (
    <FavoritosContext.Provider value={{}}>
      {children}
    </FavoritosContext.Provider>
  )
}

export const useFavoritos = () => useContext(FavoritosContext)
