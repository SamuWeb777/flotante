import React, { useContext } from 'react';
import { FavoritosContext } from '../context/FavoritosContext';

function RecetaDetalle({ receta }) {
  const { favoritos, agregarAFavoritos, eliminarDeFavoritos } = useContext(FavoritosContext);
  const enFavoritos = favoritos.some((fav) => fav.id === receta.id);

  return (
    <div>
      <h2>{receta.nombre}</h2>
      <p>{receta.descripcion}</p>
      <button onClick={() => enFavoritos ? eliminarDeFavoritos(receta.id) : agregarAFavoritos(receta)}>
        {enFavoritos ? 'Eliminar de Favoritos' : 'Agregar a Favoritos'}
      </button>
    </div>
  );
}

export default RecetaDetalle;