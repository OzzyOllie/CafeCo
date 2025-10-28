import { useNavigate, Link } from 'react-router-dom'
import './auth.css'

/*
  What this file does right now:
  - Shows only a title, one "Logg inn" button, and a small register link.
  - When you click "Logg inn", it fakes a login and sends you to "/".
  - No validation, no inputs, no errors — super quiet.

  What you can live-code during the test:
  1) Add two <input> fields (email + password) where the comments say (TODO).
  2) Add simple checks (email includes '@', password length >= 6).
  3) If checks pass, do the same localStorage + navigate below.
*/

export default function Login() {
  const navigate = useNavigate()

  // (TODO) — during the test, add:
  // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // const [error, setError] = useState('')

  function handleLoginClick() {
    // Minimal demo: mark as "logged in" and go home
    localStorage.setItem('auth', '1')
    // (Optional) if you add email state later: localStorage.setItem('user_email', email)
    navigate('/', { replace: true })
  }

  return (
    <main className="auth-page">
      <div className="auth-card">
        <h1>Logg inn</h1>

        {/* (TODO) — Add your inputs here during the test:

            <div className="auth-form">
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
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </label>

              {error && <div className="auth-error">{error}</div>}
            </div>
        */}

        <button className="auth-btn" onClick={handleLoginClick}>
          Logg inn
        </button>

        <p className="auth-help">
          Har du ikke konto? <Link to="/register">Registrer deg</Link>
        </p>
      </div>
    </main>
  )
}
