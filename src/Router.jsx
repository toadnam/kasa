import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/A-Propos.jsx'
import Logement from './pages/Fiche-Logement.jsx'
import NotFound from './pages/404.jsx'
import MainLayout from './layouts/MainLayout.jsx'

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout><Home /></MainLayout>} />
      <Route path="/a-propos" element={<MainLayout><About /></MainLayout>} />
      <Route path="/logement/:id" element={<MainLayout><Logement /></MainLayout>} />
      <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
    </Routes>
  )
}