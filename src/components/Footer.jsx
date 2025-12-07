import logoSmall from '../../img/Logo_small.png'

export default function Footer() {
  return (
    <footer className="k-footer">
      <img src={logoSmall} alt="Kasa" className="k-footer_logo" />
      <p className="k-footer_text">© Kasa — 2025. All rights reserved</p>
    </footer>
  )
}