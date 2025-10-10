import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="k-main">{children}</main>
      <Footer />
    </>
  )
}