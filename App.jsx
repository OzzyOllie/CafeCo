import { Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Header from './Comp/header'
import Footer from './Comp/footer'

import Hjem from './pages/hjem'
import OmOss from './pages/om-oss'
import BestillOmtaler from './pages/bestill-omtaler'
import Login from './pages/login'
import Register from './pages/register'

import './styles/theme.css'
import './Comp/layout.css'
import './pages/hjem.css'
import './pages/om-oss.css'

// Small layout wrapper for header/footer around protected pages
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

// Guard: if not “logged in”, push to /login
function RequireAuth() {
  const authed = localStorage.getItem('auth') === '1'
  return authed ? <Layout /> : <Navigate to="/login" replace />
}

// Page transition wrapper
function Page({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
    >
      {children}
    </motion.div>
  )
}

export default function App() {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Public routes */}
        <Route path="/login" element={<Page><Login /></Page>} />
        <Route path="/register" element={<Page><Register /></Page>} />

        {/* Protected area (everything inside needs auth) */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Page><Hjem /></Page>} />
          <Route path="/om-oss" element={<Page><OmOss /></Page>} />
          <Route path="/bestill" element={<Page><BestillOmtaler /></Page>} />
        </Route>

        {/* Default: if unknown path, send to login (or home if authed) */}
        <Route
          path="*"
          element={
            localStorage.getItem('auth') === '1'
              ? <Navigate to="/" replace />
              : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </AnimatePresence>
  )
}
