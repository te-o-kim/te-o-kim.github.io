"use client";
import conf from '@/config.json';

export default function Location(){
  return (
    <section id="location" className="section">
      <h2>모임 장소</h2>
      <div className="card">
        <p className="when">{new Date(conf.eventDate).toLocaleString()}</p>
        <p className="where"><strong>{conf.venueName}</strong><br/>{conf.venueAddress}</p>
        <div className="mapButtons">
          <a className="btn" href={conf.naverMapUrl} target="_blank">NAVER 지도</a>
          <a className="btn" href={conf.kakaoMapUrl} target="_blank">카카오맵</a>
          <a className="btn" href={conf.googleMapUrl} target="_blank">Google 지도</a>
          <button className="btn outline" onClick={() => navigator.clipboard.writeText(conf.venueAddress)}>주소 복사</button>
        </div>
      </div>
    </section>
  );
}
