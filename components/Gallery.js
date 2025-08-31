"use client";
const images = Array.from({length:6}).map((_,i)=>`/gallery/sample${i+1}.jpg`);

export default function Gallery(){
  return (
    <section id="gallery" className="section">
      <h2>사진첩</h2>
      <div className="grid">
        {images.map((src, i) => (
          <a key={i} href={src} target="_blank" rel="noreferrer">
            <img src={src} alt={`gallery-${i+1}`} />
          </a>
        ))}
      </div>
    </section>
  )
}
