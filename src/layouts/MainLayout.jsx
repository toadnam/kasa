import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main style={{ padding: '1rem' }}>{children}</main>
      <Footer />
    </>
  )
}