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
        {/* ✅ PWA Support */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#FFD700" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="FastWheel Limo" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
      </head>

      <body className="min-h-screen flex flex-col pt-16">
        {/* Main Layout Components */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <StickyMobileBar />
        <Footer />

        <call-us-selector
          phonesystem-url="https://fastwheels.ma.3cx.us"
          party="LiveChat457078"
        ></call-us-selector>

        {/* ✅ 3CX Widget Script */}
        <Script
          src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
          id="tcx-callus-js"
          strategy="afterInteractive"
        />

        {/* ✅ Manual 3CX Initialization */}
        <Script id="init-3cx" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              if (window.CallUs && document.querySelector('call-us-selector')) {
                console.log('3CX widget initializing manually...');
                window.CallUs.init();
              } else {
                console.warn('3CX widget not found or CallUs not ready.');
              }
            });
          `}
        </Script>

        {/* ✅ Analytics and Speed Insights */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
