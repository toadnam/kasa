import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="notfound" aria-labelledby="nf-title">
      <h1 id="nf-title" className="nf-code">404</h1>
      <p className="nf-text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="nf-link">Retourner sur la page d’accueil</Link>
    </main>
  );
}