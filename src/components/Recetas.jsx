import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

function Recetas () {
  const { recetas, cargarRecetas, loading, error } = useResultados();

  useEffect(() => {
    cargarRecetas();
  }, [cargarRecetas]);

  console.log('Encuestas en el estado:', recetas); // Ver los datos cargados

  if (loading) {
    return <p>Cargando encuestas...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  return (
    <div>
      {recetas.map((receta) => (
        
          <li key={receta.id}>
          <Link to={`/receta/${receta.id}`}>{receta.nombre}</Link>
        </li>
        
      ))}
    </div>
  )
}

export default Recetas