import Header from './components/Header'
import ManuscriptPage from './components/ManuscriptPage'
import ScrollToTop from './components/ScrollToTop'
import './App.css'

const PAGE_COUNT = 44

const pages = Array.from({ length: PAGE_COUNT }, (_, i) => ({
  number: i + 1,
  src: `pages/page-${String(i + 1).padStart(2, '0')}.webp`,
  alt: `Manuscript page ${i + 1}`,
}))

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="manuscript">
        {pages.map((page) => (
          <>
            <ManuscriptPage key={page.number} {...page} />
            {page.number === 1 && (
              <div id="scroll-sentinel" style={{ height: 0 }} />
            )}
          </>
        ))}
      </main>
      <footer className="footer">
        <p>© Diovanna Frazier. All rights reserved.</p>
      </footer>
      <ScrollToTop sentinelId="scroll-sentinel" />
    </div>
  )
}
