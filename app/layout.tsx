import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyMobileBar from '../components/StickyMobileBar'
import Script from 'next/script'   // ✅ IMPORTANT

export const metadata = {
  title: 'FastWheel Limo',
  description: 'Premium limo & chauffeur service'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col pt-16">

        
    

        {/* ✅ Main Layout Components */}
        <Navbar />
        <main className="flex-1">{children}</main>
        <StickyMobileBar />
        <Footer />
        {/* ✅ Move this down */}
        {/* @ts-ignore */}
<call-us-selector
  phonesystem-url="https://fastwheels.ma.3cx.us"
  party="LiveChat561783"
>
  
</call-us-selector>


<Script
  src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
  id="tcx-callus-js"
  strategy="afterInteractive"
/>
{/* ✅ Manual 3CX Initialization (Step 4) */}
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

      </body>
    </html>
  )
}
