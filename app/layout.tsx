import './globals.css'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from '@vercel/analytics/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyMobileBar from '../components/StickyMobileBar'
import Script from 'next/script'

export const metadata = {
  title: 'FastWheel Limo',
  description: 'Premium limo & chauffeur service',
  manifest: '/manifest.json',
  themeColor: '#FFD700',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="FastWheel Limo" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
      </head>

      <body className="min-h-screen flex flex-col pt-16">
        <Navbar />
        <main className="flex-1">{children}</main>
        <StickyMobileBar />
        <Footer />

       {/* ✅ Tawk.to Chat Widget */}
<Script id="tawk-to" strategy="afterInteractive">
  {`
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    (function() {
      var s1 = document.createElement("script");
      s1.async = true;
      s1.src = 'https://embed.tawk.to/60cb56b165b7290ac63679ff/1f8d4l9q8';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      document.head.appendChild(s1);
    })();
  `}
</Script>


        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
