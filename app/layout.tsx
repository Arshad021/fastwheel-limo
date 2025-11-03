import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import StickyMobileBar from '../components/StickyMobileBar'

export const metadata = {
  title: 'FastWheel Limo',
  description: 'Premium limo & chauffeur service'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col pt-16">
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
            <script
              dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)};gtag('js', new Date()); gtag('config','${gaId}');`}}
            />
          </>
        )}
        <Navbar />
        <main className="flex-1">{children}</main>
        <StickyMobileBar />
        <Footer />
      </body>
    </html>
  )
}
