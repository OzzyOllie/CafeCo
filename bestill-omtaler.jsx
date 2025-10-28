import { useEffect, useState } from 'react'
import './bestill-omtaler.css'

export default function BestillOmtaler() {
  // ===== Booking form state =====
  const [name, setName] = useState('')
  const [contact, setContact] = useState('')        // e-post eller telefon
  const [type, setType] = useState('Wi-Fi/Internett')
  const [place, setPlace] = useState('Skolen')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [details, setDetails] = useState('')

  const supportEmail = 'support@cafe.co.no'

  function handleSubmit(e) {
    e.preventDefault()
    // Bygg en enkel e-post med info
    const subject = encodeURIComponent(`Bestilling: ${type} (${name})`)
    const bodyLines = [
      `Navn: ${name}`,
      `Kontakt: ${contact}`,
      `Type: ${type}`,
      `Sted: ${place}`,
      `Ønsket tidspunkt: ${date || 'ikke valgt'} ${time || ''}`,
      '',
      'Beskrivelse:',
      details || '(ingen tekst)'
    ]
    const body = encodeURIComponent(bodyLines.join('\n'))
    window.location.href = `mailto:${supportEmail}?subject=${subject}&body=${body}`
  }

  // ===== Reviews state (localStorage) =====
  const [reviews, setReviews] = useState([])
  const [stars, setStars] = useState(5)
  const [comment, setComment] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('cafeco_reviews')
    if (saved) {
      try { setReviews(JSON.parse(saved)) } catch {}
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('cafeco_reviews', JSON.stringify(reviews))
  }, [reviews])

  function addReview(e) {
    e.preventDefault()
    if (!comment.trim()) return
    const entry = {
      id: Date.now(),
      stars,
      comment: comment.trim(),
      when: new Date().toISOString(),
    }
    setReviews(prev => [entry, ...prev])
    setStars(5)
    setComment('')
  }

  return (
    <main className="page-wrap booking-wrap">
      {/* HERO / INTRO */}
      <header className="booking-hero">
        <h1>Bestill <span className="accent">time</span></h1>
        <p>
          Velg problemtype, sted og tidsønske – vi svarer raskt. Nederst kan du lese
          omtaler fra andre og legge igjen din egen rating ⭐.
        </p>
      </header>

      {/* BOOKING FORM */}
      <section className="booking-card">
        <form onSubmit={handleSubmit} className="booking-form" aria-label="Bestill time">

          <div className="form-grid">
            {/* Navn */}
            <label className="field">
              <span>Navn</span>
              <input
                type="text"
                placeholder="Ditt navn"
                value={name}
                onChange={e => setName(e.target.value)}
                required
              />
            </label>

            {/* Kontakt */}
            <label className="field">
              <span>Kontakt (e-post eller tlf.)</span>
              <input
                type="text"
                placeholder="navn@epost.no / 999 99 999"
                value={contact}
                onChange={e => setContact(e.target.value)}
                required
              />
            </label>

            {/* Type */}
            <label className="field">
              <span>Problemtype</span>
              <select value={type} onChange={e => setType(e.target.value)}>
                <option>Wi-Fi/Internett</option>
                <option>Ruter/Mesh</option>
                <option>Brannmur/Sikkerhet</option>
                <option>Kabling/Patch</option>
                <option>Backup/Antivirus</option>
                <option>Annet</option>
              </select>
            </label>

            {/* Sted */}
            <label className="field">
              <span>Sted</span>
              <select value={place} onChange={e => setPlace(e.target.value)}>
                <option>Skolen</option>
                <option>Hjemmebesøk</option>
                <option>Fjernhjelp</option>
              </select>
            </label>

            {/* Dato */}
            <label className="field">
              <span>Ønsket dato</span>
              <input type="date" value={date} onChange={e => setDate(e.target.value)} />
            </label>

            {/* Tid */}
            <label className="field">
              <span>Ønsket tid</span>
              <input type="time" value={time} onChange={e => setTime(e.target.value)} />
            </label>
          </div>

          {/* Beskrivelse */}
          <label className="field">
            <span>Kort beskrivelse</span>
            <textarea
              rows={5}
              placeholder="F.eks. Wi-Fi faller ut i stua, ruter i gangen, 2 etasjer, mange vegger osv."
              value={details}
              onChange={e => setDetails(e.target.value)}
            />
          </label>

          <div className="actions">
            <button type="submit" className="btn-primary">Send forespørsel</button>
            <a className="btn-ghost" href={`mailto:${supportEmail}`}>E-post direkte</a>
          </div>
        </form>
      </section>

      {/* REVIEWS */}
      <section className="reviews">
        <header className="reviews-head">
          <h2>Kundeomtaler</h2>
          <p>Del erfaringen din – det hjelper andre 👇</p>
        </header>

        {/* Add review */}
        <form className="review-form" onSubmit={addReview} aria-label="Legg til omtale">
          <div className="stars-input" role="radiogroup" aria-label="Velg antall stjerner">
            {[1,2,3,4,5].map(n => (
              <button
                key={n}
                type="button"
                className={`star-btn ${n <= stars ? 'on' : ''}`}
                onClick={() => setStars(n)}
                aria-label={`${n} stjerne${n>1?'r':''}`}
              >★</button>
            ))}
          </div>
          <textarea
            rows={3}
            placeholder="Skriv en kort kommentar…"
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <button className="btn-primary" type="submit">Legg ut omtale</button>
        </form>

        {/* List reviews */}
        <div className="reviews-list">
          {reviews.length === 0 ? (
            <div className="empty">Ingen omtaler ennå – bli den første!</div>
          ) : (
            reviews.map(r => (
              <article className="review-card" key={r.id}>
                <div className="stars" aria-hidden="true">
                  {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
                </div>
                <p className="comment">{r.comment}</p>
                <div className="meta">
                  <span>{new Date(r.when).toLocaleString('no-NO')}</span>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  )
}
