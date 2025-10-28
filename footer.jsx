import './layout.css'
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="site-footer">
      <span>© {year}</span>
      <span>Haugaland IT</span>
    </footer>
  )
}
