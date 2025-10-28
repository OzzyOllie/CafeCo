import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './auth.css'

export default function Register() {
  const [email, setEmail] = useState('')
  const [pw, setPw] = useState('')
  const [pw2, setPw2] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('auth') === '1') {
      navigate('/', { replace: true })
    }
  }, [navigate])

  function handleSubmit(e) {
    e.preventDefault()
    setError('')

    if (!email.includes('@')) return setError('Skriv inn en gyldig e-post.')
    if (pw.length < 6) return setError('Passord må ha minst 6 tegn.')
    if (pw !== pw2) return setError('Passordene er ikke like.')

    // Fake “account created”: also log them straight in
    localStorage.setItem('auth', '1')
    localStorage.setItem('user_email', email)
    navigate('/', { replace: true })
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Registrer deg</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label>
            E-post
            <input
              type="email"
              placeholder="din@epost.no"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Passord
            <input
              type="password"
              placeholder="minst 6 tegn"
              value={pw}
              onChange={e => setPw(e.target.value)}
              required
              minLength={6}
            />
          </label>

          <label>
            Gjenta passord
            <input
              type="password"
              placeholder="gjenta passord"
              value={pw2}
              onChange={e => setPw2(e.target.value)}
              required
              minLength={6}
            />
          </label>

          {error && <div className="auth-error">{error}</div>}
          <button className="auth-btn" type="submit">Opprett konto</button>
        </form>

        <p className="auth-help">
          Har du allerede konto? <Link to="/login">Logg inn</Link>
        </p>
      </div>
    </main>
  )
}
