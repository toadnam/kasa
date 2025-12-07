import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <main className="k-main error" aria-labelledby="err-title">
      <h1 id="err-title" className="error_code">404</h1>
      <p className="error_text">
        Oups! La page que vous demandez n'existe pas.
      </p>
      <Link to="/" className="error_back">Retourner sur la page d’accueil</Link>
    </main>
  );
}