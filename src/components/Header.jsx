import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-title-block">
          <h1 className="header-title">Completeness</h1>
          <p className="header-author">Diovanna Frazier</p>
        </div>
        <a
          className="header-download"
          href="COMPLETENESS.pdf"
          download
          aria-label="Download Completeness as PDF"
        >
          ↓ PDF
        </a>
      </div>
    </header>
  )
}
