import { NavLink } from 'react-router-dom'

export default function Header() {
  const linkStyle = ({ isActive }) => ({
    marginLeft: '1rem',
    textDecoration: isActive ? 'underline' : 'none'
  })

return (
    <header style={{ padding: '1rem', display: 'flex', justifyContent: 'space-between' }}>
      <NavLink to="/" style={{ fontWeight: 800 }}>Kasa</NavLink>
      <nav>
        <NavLink to="/" style={linkStyle}>Accueil</NavLink>
        <NavLink to="/a-propos" style={linkStyle}>À&nbsp;propos</NavLink>
      </nav>
    </header>
  )
}