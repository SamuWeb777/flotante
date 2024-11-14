import React from 'react';
import { FavoritosProvider } from './context/FavoritosContext';
import Recetas from './components/Recetas';
import Favoritos from './components/Favoritos';
import useRecetas from './hooks/useRecetas';
import { Route, Router, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import RecetaDetalle from './components/RecetaDetalle';

function App () {
  const recetas = useRecetas
  return (
    <FavoritosProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Recetas />} />
          <Route path="/favoritos/:id" element={<RecetaDetalle />} />
        </Routes>
      </Router>
    </FavoritosProvider>
  )
}

export default App;