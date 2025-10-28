import { Link, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()

  function handleLogout() {
    localStorage.removeItem('auth')
    localStorage.removeItem('user_email')
    navigate('/login', { replace: true })
  }

  return (
    <header className="site-header">
      <div className="brand">
        <img className="logo" src="/favicon.png" alt="Café Co" />
        <span className="brand-name">Café Co</span>
      </div>

      <div className="nav-auth">
        <nav className="main-nav">
          <Link to="/">Hjem</Link>
          <Link to="/om-oss">Om Oss</Link>
          <Link to="/bestill">Bestill Time</Link>
        </nav>

        <div className="auth">
          {localStorage.getItem('auth') === '1' ? (
            <button className="btn" onClick={handleLogout}>Logg ut</button>
          ) : (
            <>
              <Link to="/login">Logg inn</Link>
              <Link to="/register" className="btn">Registrer Deg</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
