import { NavLink } from 'react-router-dom'

export default function Header() {

  return (
    <header className="k-header">
      <NavLink to="/" className="k-logo">Kasa</NavLink>
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