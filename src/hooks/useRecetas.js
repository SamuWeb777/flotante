import { useEffect, useState } from "react";


function useRecetas () {
  const [recetas, cargarRecetas] = useState([]);

  useEffect(() => {
    // Simulamos una carga de datos desde el archivo JSON
    const cargarRecetas = async () => {
      const response = await fetch('/recetas.json');
      const data = await response.json();
      setRecetas(data);
    };

    cargarRecetas();
  }, []);

  return {recetas};
}

export default useRecetas;