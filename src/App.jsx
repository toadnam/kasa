import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/A-Propos.jsx'
import Logement from './pages/Fiche-Logement.jsx'
import NotFound from './pages/404.jsx'
import './App.css'

export default function App() {
  return (
    <>
      <header style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ fontWeight: 800 }}>Kasa</Link>
        <nav>
          <Link to="/" style={{ marginRight: '1rem' }}>Accueil</Link>
          <Link to="/a-propos">À&nbsp;propos</Link>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}
