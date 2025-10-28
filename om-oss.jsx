// src/pages/om-oss.jsx
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './om-oss.css'

export default function OmOss() {
  const [cafeMode, setCafeMode] = useState(false)
  const year = new Date().getFullYear()

  useEffect(() => {
    const seq = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']
    let i = 0
    const onKey = e => { if (e.key === seq[i]) { i++; if (i === seq.length) { setCafeMode(v=>!v); i=0 } } else i=0 }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>

      <main>
        <div className={`about-wrap ${cafeMode ? 'cafe-mode' : ''}`}>

          {/* HERO */}
          <header className="about-hero">
            <div className="title-side">
              <h1>Om <span className="accent">Café Co</span></h1>
              <p>
                Vi er en firemanns “barkrakk-gjeng” som serverer stabile nettverk og trygg sikkerhet.
                Mindre prat, mer praksis. Du sier problemet – vi fikser.
              </p>

              <div className="quick-stats">
                <Stat num="30+" label="løste nettverk" />
                <Stat num="12" label="mesh-oppsett" />
                <Stat num="100%" label="fornøyde kunder" />
              </div>

              <button className="cup-btn" onClick={() => setCafeMode(v => !v)} aria-label="Toggle Café Mode">☕</button>
            </div>

            <AnimatePresence>
              {cafeMode && (
                <motion.div
                  key="steam"
                  className="steam"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                >
                  <span>Barista-modus aktivert</span>
                  <small>(Slå av/på med ☕ eller Konami-koden)</small>
                </motion.div>
              )}
            </AnimatePresence>
          </header>

          {/* TEAM */}
          <section className="team">
            <h2>Møt teamet</h2>

            {/* Row 1: Info boxes WITH emoji + name */}
            <div className="team-grid">
              {TEAM.map(m => (
                <div className="team-card" key={m.name}>
                  <div className="avatar">{m.emoji}</div>
                  <div className="info">
                    <h3>{m.name}</h3>
                    <p className="role">{m.role}</p>
                    <div className="tags">
                      {m.tags.map(t => <span key={t}>{t}</span>)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2: BIG photos — same columns, aligned under the boxes */}
            <div className="photos-grid">
              {TEAM.map(m => (
                <div className="photo-box" key={m.name + '-ph'}>
                  <div className="photo-placeholder"> Picture Comming</div>
                </div>
              ))}
            </div>
          </section>

          {/* SERVICES TABLE */}
          <section className="services">
            <h2>Tjenester & priser</h2>
            <ServicesTable />
          </section>
        </div>
      </main>

    </>
  )
}

/* --- tiny components --- */
function Stat({ num, label }) {
  return (
    <div className="stat">
      <span className="num">{num}</span>
      <span className="label">{label}</span>
    </div>
  )
}

/* --- data + table (unchanged) --- */
const SERVICES = [
  { kategori:'Kabling & Patch', tjeneste:'Feilsøking kabling', beskrivelse:'Kontinuitetstesting og reparasjon av kabler.', startpris:1200, levering:'3–14 dager', ansvarlig:'John', tilgjengelighet:'Full', dato:'16/10/2025' },
  { kategori:'Kabling & Patch', tjeneste:'PoE-switch installasjon', beskrivelse:'Levering og konfigurering av PoE-switcher.', startpris:2600, levering:'4–7 dager', ansvarlig:'John', tilgjengelighet:'Begrenset', dato:'08/10/2025' },
  { kategori:'Kabling & Patch', tjeneste:'RJ45-terminering', beskrivelse:'Pressing og testing av nettverksuttak.', startpris:900, levering:'1–3 dager', ansvarlig:'John', tilgjengelighet:'Ledig', dato:'20/10/2025' },
  { kategori:'Kabling & Patch', tjeneste:'Rack & patch-panel', beskrivelse:'Montering, patching og merking i rack.', startpris:3000, levering:'2–14 dager', ansvarlig:'John', tilgjengelighet:'Ledig', dato:'03/10/2025' },

  { kategori:'Nettsider & Design', tjeneste:'Nettbutikk—oppsett', beskrivelse:'Oppsett av enkel nettbutikk med betaling.', startpris:9900, levering:'5–7 dager', ansvarlig:'Designteam', tilgjengelighet:'Begrenset', dato:'03/10/2025' },
  { kategori:'Nettsider & Design', tjeneste:'One-page landingsside', beskrivelse:'Design og implementasjon av enkel landingsside.', startpris:5900, levering:'3–6 dager', ansvarlig:'Designteam', tilgjengelighet:'Begrenset', dato:'04/10/2025' },
  { kategori:'Nettsider & Design', tjeneste:'SEO grunnpakke', beskrivelse:'Teknisk SEO, hastighet og metadata.', startpris:2900, levering:'2–4 dager', ansvarlig:'Designteam', tilgjengelighet:'Ledig', dato:'03/10/2025' },
  { kategori:'Nettsider & Design', tjeneste:'UX/UI-redesign', beskrivelse:'Visuell oppfriskning og bedre brukervennlighet.', startpris:6900, levering:'5–7 dager', ansvarlig:'Designteam', tilgjengelighet:'Begrenset', dato:'14/10/2025' },

  { kategori:'Sikkerhet', tjeneste:'2FA-implementering', beskrivelse:'Påslag av totrinnsbekreftelse for brukere og admin.', startpris:1800, levering:'1–7 dager', ansvarlig:'Kentia', tilgjengelighet:'Ledig', dato:'13/10/2025' },
  { kategori:'Sikkerhet', tjeneste:'Brannmur-oppsett', beskrivelse:'Installasjon, regler og NAT for sikkerhet.', startpris:3500, levering:'3–5 dager', ansvarlig:'Kentia', tilgjengelighet:'Ledig', dato:'19/10/2025' },
  { kategori:'Sikkerhet', tjeneste:'Sårbarhetsscan', beskrivelse:'Skanning med rapport og forslag til tiltak.', startpris:2800, levering:'1–3 dager', ansvarlig:'Kentia', tilgjengelighet:'Full', dato:'03/10/2025' },
  { kategori:'Sikkerhet', tjeneste:'VPN-tilgang', beskrivelse:'Sikker fjernaksess for ansatte/kunder (SSL/IPsec).', startpris:2400, levering:'1–4 dager', ansvarlig:'Kentia', tilgjengelighet:'Ledig', dato:'01/10/2025' },

  { kategori:'Support & Opplæring', tjeneste:'Antivirus-pakke', beskrivelse:'Installasjon og policy for endpunkter.', startpris:1500, levering:'2–7 dager', ansvarlig:'Rayyan', tilgjengelighet:'Ledig', dato:'01/10/2025' },
  { kategori:'Support & Opplæring', tjeneste:'Backup & gjenoppretting', beskrivelse:'Oppsett av backup-rutiner og test av restore.', startpris:1900, levering:'1–3 dager', ansvarlig:'Rayyan', tilgjengelighet:'Full', dato:'01/10/2025' },
  { kategori:'Support & Opplæring', tjeneste:'Kurs for ansatte', beskrivelse:'Grunnkurs i sikkerhet og beste praksis.', startpris:2500, levering:'3–10 dager', ansvarlig:'Rayyan', tilgjengelighet:'Full', dato:'20/10/2025' },

  { kategori:'Wi-Fi & Mesh', tjeneste:'AP-installasjon', beskrivelse:'Montering og konfigurering av access points og SSID.', startpris:1900, levering:'1–3 dager', ansvarlig:'Ole', tilgjengelighet:'Full', dato:'18/10/2025' },
  { kategori:'Wi-Fi & Mesh', tjeneste:'Mesh-utrulling', beskrivelse:'Planlegging og oppsett av mesh-nett for hjem/bedrift.', startpris:3900, levering:'3–14 dager', ansvarlig:'Ole', tilgjengelighet:'Ledig', dato:'16/10/2025' },
  { kategori:'Wi-Fi & Mesh', tjeneste:'Roaming-optimalisering', beskrivelse:'Finjustering for sømløs roaming mellom AP-er.', startpris:2200, levering:'2–3 dager', ansvarlig:'Ole', tilgjengelighet:'Ledig', dato:'08/10/2025' },
  { kategori:'Wi-Fi & Mesh', tjeneste:'Wi-Fi site survey', beskrivelse:'Kartlegging av dekning og interferens.', startpris:2900, levering:'3–4 dager', ansvarlig:'Ole', tilgjengelighet:'Begrenset', dato:'01/10/2025' },
]

function ServicesTable() {
  const [q, setQ] = useState('')
  const [cat, setCat] = useState('Alle')
  const [owner, setOwner] = useState('Alle')
  const [avail, setAvail] = useState('Alle')
  const [sort, setSort] = useState({ key: 'tjeneste', dir: 'asc' })
  const [zoom, setZoom] = useState(1.0)

  const cats = ['Alle', ...new Set(SERVICES.map(s => s.kategori))]
  const owners = ['Alle', ...new Set(SERVICES.map(s => s.ansvarlig))]
  const avails = ['Alle', ...new Set(SERVICES.map(s => s.tilgjengelighet))]

  const data = SERVICES
    .filter(s => (cat==='Alle' || s.kategori===cat))
    .filter(s => (owner==='Alle' || s.ansvarlig===owner))
    .filter(s => (avail==='Alle' || s.tilgjengelighet===avail))
    .filter(s => (s.kategori + ' ' + s.tjeneste + ' ' + s.beskrivelse).toLowerCase().includes(q.toLowerCase()))
    .sort((a,b) => {
      const k = sort.key
      const av = a[k], bv = b[k]
      const cmp = typeof av === 'number' ? av - bv : String(av).localeCompare(String(bv), 'no')
      return sort.dir === 'asc' ? cmp : -cmp
    })

  const setSortKey = key => setSort(s => s.key===key ? ({key, dir:s.dir==='asc'?'desc':'asc'}) : ({key, dir:'asc'}))

  return (
    <div className="svc-wrap" style={{ fontSize: `${zoom}rem` }}>
      <div className="svc-controls">
        <input className="svc-search" placeholder="Søk: tjeneste, beskrivelse…" value={q} onChange={e=>setQ(e.target.value)} />
        <select value={cat} onChange={e=>setCat(e.target.value)}>{cats.map(c => <option key={c}>{c}</option>)}</select>
        <select value={owner} onChange={e=>setOwner(e.target.value)}>{owners.map(o => <option key={o}>{o}</option>)}</select>
        <select value={avail} onChange={e=>setAvail(e.target.value)}>{avails.map(a => <option key={a}>{a}</option>)}</select>
        <div className="zoom">
          <button onClick={()=>setZoom(z=>Math.max(0.9, +(z-0.1).toFixed(1)))}>A−</button>
          <button onClick={()=>setZoom(z=>Math.min(1.6, +(z+0.1).toFixed(1)))}>A+</button>
        </div>
      </div>

      <div className="svc-table-wrap">
        <table className="svc-table">
          <thead>
            <tr>
              <Th onClick={()=>setSortKey('kategori')}  active={sort.key==='kategori'} dir={sort.dir}>Kategori</Th>
              <Th onClick={()=>setSortKey('tjeneste')}  active={sort.key==='tjeneste'} dir={sort.dir}>Tjeneste</Th>
              <Th onClick={()=>setSortKey('beskrivelse')} active={sort.key==='beskrivelse'} dir={sort.dir}>Kort beskrivelse</Th>
              <Th onClick={()=>setSortKey('startpris')} active={sort.key==='startpris'} dir={sort.dir} right>Startpris (NOK)</Th>
              <Th onClick={()=>setSortKey('levering')}  active={sort.key==='levering'} dir={sort.dir}>Estimert levering</Th>
              <Th onClick={()=>setSortKey('ansvarlig')} active={sort.key==='ansvarlig'} dir={sort.dir}>Ansvarlig</Th>
              <Th onClick={()=>setSortKey('tilgjengelighet')} active={sort.key==='tilgjengelighet'} dir={sort.dir}>Tilgjengelighet</Th>
              <Th onClick={()=>setSortKey('dato')} active={sort.key==='dato'} dir={sort.dir}>Dato lagt til</Th>
            </tr>
          </thead>
          <tbody>
            {data.map((s, i) => (
              <tr key={i}>
                <td>{s.kategori}</td>
                <td className="bold">{s.tjeneste}</td>
                <td>{s.beskrivelse}</td>
                <td className="right">{s.startpris.toLocaleString('no-NO')}</td>
                <td>{s.levering}</td>
                <td>{s.ansvarlig}</td>
                <td><Badge value={s.tilgjengelighet} /></td>
                <td>{s.dato}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

function Th({ children, onClick, active, dir, right }) {
  return (
    <th onClick={onClick} className={`${active?'active':''} ${right?'right':''}`} role="button" tabIndex={0}>
      {children}{active && <span className="caret">{dir==='asc'?'▲':'▼'}</span>}
    </th>
  )
}

function Badge({ value }) {
  const map = { 'Ledig':{bg:'#e8f7ee',fg:'#15803d'}, 'Begrenset':{bg:'#fff7e6',fg:'#b45309'}, 'Full':{bg:'#ffecec',fg:'#b91c1c'} }
  const c = map[value] || { bg:'#eef2ff', fg:'#3730a3' }
  return <span className="badge" style={{ background:c.bg, color:c.fg }}>{value}</span>
}

/* Team data: emojis + photo paths (matching /public filenames!) */
const TEAM = [
  { name:'Ole',    role:'Wi-Fi & Mesh',        emoji:'📶', photo:'/Ole.png',    tags:['Survey','AP','Roaming'] },
  { name:'Kentia', role:'Sikkerhet',           emoji:'🛡️', photo:'/Kentia.png', tags:['Firewall','2FA','VPN'] },
  { name:'John',   role:'Kabling & Patch',     emoji:'🧰', photo:'/John.png',   tags:['RJ45','PoE','Rack'] },
  { name:'Rayyan', role:'Support & Opplæring', emoji:'💡', photo:'/Rayyan.png', tags:['Backup','Antivirus','Kurs'] },
]
