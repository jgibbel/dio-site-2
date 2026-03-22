import './ManuscriptPage.css'

export default function ManuscriptPage({ number, src, alt }) {
  return (
    <figure className="manuscript-page">
      <img
        src={src}
        alt={alt}
        loading={number <= 2 ? 'eager' : 'lazy'}
      />
    </figure>
  )
}
