// src/pages/hjem.jsx
import { Link } from 'react-router-dom'
import './hjem.css'

export default function Hjem() {
  const year = new Date().getFullYear()

  return (
    <>
    


      <main>
        <section className="hero-split">
          <div className="left-card">
            <h1>Café Co — Nettverk &amp; Sikkerhet gjort enkelt</h1>

            <p>
              Vi er en liten gruppe på fire fra klassen som elsker å fikse nettverk.
              Hos Café Co hjelper vi elever, lærere og små bedrifter med alt fra
              ustabilt Wi-Fi til sikkerhetsoppsett – raskt, ryddig og til hyggelige priser.
            </p>

            <p>
              Tenk på oss som din lille IT-kafé: Kom med problemet ditt, ta en kaffe,
              og gå ut med et nettverk som bare funker. Vi kan møtes på skolen,
              gjøre hjemmebesøk eller koble oss opp eksternt.
            </p>

            <h2>Hva vi gjør</h2>
            <ul className="bullet">
              <li>Feilsøker tregt eller ustabilt Wi-Fi</li>
              <li>Setter opp ruter, mesh og tilgangspunkter</li>
              <li>Sikkerhetsherding: brannmur, gjestenett, passord, 2FA</li>
              <li>Kabellegging, patching og rydding i skap</li>
              <li>Enhetsbeskyttelse: antivirus, oppdateringer, backup</li>
              <li>VPN og sikre løsninger for hjem og små kontor</li>
              <li>Smart-home oppsett (kamera, dørklokke, print, NAS)</li>
              <li>Enkle kurs: “Slik sikrer du nettverket ditt”</li>
            </ul>

            <p className="note">
              Vi behandler dataene dine konfidensielt og forklarer alt vi gjør – så
              du sitter igjen med kontroll.
            </p>
          </div>

          {/* Right-side image placeholder */}
          <div className="right-visual" aria-label="Bildeplassholder">
            <img className = "hero-img" src="/pic1.jpg" alt = "Cafe Co" />
          </div>
        </section>

        <div className="contact-cards">
          <a className="card" href="tel:+47491807413">
            <div className="icon">📞</div>
            <div>
              <div className="label">Telefon</div>
              <div className="value">+47 918 07 413</div>
            </div>
          </a>

          <a className="card" href="mailto:support@cafe.co.no">
            <div className="icon">✉️</div>
            <div>
              <div className="label">E-post</div>
              <div className="value">support@cafe.co.no</div>
            </div>
          </a>
        </div>
      </main>

      
    </>
  )
}
