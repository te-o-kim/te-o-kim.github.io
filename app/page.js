"use client";
import Countdown from '@/components/Countdown';
import Timeline from '@/components/Timeline';
import Gallery from '@/components/Gallery';
import Location from '@/components/Location';
import conf from '@/config.json';

export default function Page(){
  return (
    <main>
      {/* Intro */}
      <section id="intro" className="intro">
        <div className="balloons" aria-hidden>🎈</div>
        <h1>{conf.babyName}의 첫 돌잔치</h1>
        <p className="tag">{conf.hostMessage}</p>
        <Countdown />
        <div className="ctaWrap">
          <a href="#timeline" className="btn">타임라인 보기</a>
          <a href="#gallery" className="btn outline">사진첩</a>
        </div>
      </section>

      <Timeline />
      <Gallery />
      <Location />

      <footer className="footer">© {new Date().getFullYear()} {conf.babyName} 돌잔치</footer>
    </main>
  )
}
