import './index.css'
import App from './App.jsx'
import { FavoritosProvider } from './context/FavoritosContext'
import ReactDOM from 'react-dom/client'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FavoritosProvider>
    <App />
  </FavoritosProvider>
)
