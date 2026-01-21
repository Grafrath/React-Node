import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Next.js & TypeScript 1일차 학습 프로젝트',
  description: 'Next.js의 기본 구조와 SSR/SSG/ISR을 학습하는 프로젝트입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">{/* 3. 필수: <html> 태그 */}
      <body>{/* 4. 필수: <body> 태그 */}
        {/* === 공통 UI 요소 시작 === */}
        <header style={{ padding: '20px', backgroundColor: '#f0f0f0' }}>
          <nav>
            <a href="/">홈</a> | <a href="/about">소개</a> | <a href="/dashboard">대시보드</a>
          </nav>
        </header>
        {/* === 공통 UI 요소 끝 === */}

        {/* 5. 핵심: children을 렌더링합니다. */}
        {/* 현재 경로에 해당하는 page.tsx 내용이 여기에 들어갑니다. */}
        <main style={{ padding: '20px' }}>
          {children}
        </main>
        
        <footer style={{ marginTop: '50px', borderTop: '1px solid #ccc' }}>
          <p>© 2025 Next.js 학습 프로젝트</p>
        </footer>
      </body>
    </html>
  );
}
