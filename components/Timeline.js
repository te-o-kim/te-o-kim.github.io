"use client";
import data from '@/data/timeline.json';

export default function Timeline() {
  return (
    <section id="timeline" className="section">
      <h2>성장 타임라인</h2>
      <div className="timeline">
        {data.map((item, idx) => (
          <div key={idx} className={`tlItem ${idx % 2 ? 'right' : 'left'}`}>
            <img src={item.image} alt={item.title} />
            <div className="bubble">
              <h3>{item.title}</h3>
              <p>{item.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
