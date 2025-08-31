export const metadata = {
  title: '돌잔치 초대장',
  description: '아기의 첫 돌을 축하하는 초대장'
}
import './globals.css'

export default function RootLayout({ children }){
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
