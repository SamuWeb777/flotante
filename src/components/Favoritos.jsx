import React from 'react';
import { useFavoritos } from '../context/FavoritosContext';

function Favoritos () {
  const {favoritos, eliminarDeFavoritos} = useFavoritos();
  return (
    <div>
      <h1>Favoritos</h1>
      <ul>
        {favoritos.map((receta) => (
          <li key={receta.id}>
            <h2>{receta.nombre}</h2>
            <button onClick={() => eliminarDeFavoritos(receta.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Favoritos