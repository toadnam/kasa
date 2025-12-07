import { NavLink } from 'react-router-dom'
import logo from '../../img/Logo.png'

export default function Header() {

  return (
    <header className="k-header">
      {/* Logo cliquable vers la page d’accueil */}
      <NavLink to="/" className="k-logo">
        <img src={logo} alt="Kasa" className="k-logo_img" />
      </NavLink>
      
      <nav className="k-nav">
        <NavLink
          to="/"
          className={({ isActive }) => `k-link${isActive ? ' k-link-active' : ''}`}
        >
          Accueil
        </NavLink>
        <NavLink
          to="/a-propos"
          className={({ isActive }) => `k-link${isActive ? ' k-link-active' : ''}`}
        >
          À propos
        </NavLink>
      </nav>
    </header>
  )
}