'use client'
import { useEffect } from 'react'
import Script from 'next/script'

export default function ThreeCXWidget() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const existing = document.querySelector('call-us-selector')
      if (!existing) {
        const chatEl = document.createElement('call-us-selector')
        chatEl.setAttribute('phonesystem-url', 'https://fastwheels.ma.3cx.us')
        chatEl.setAttribute('party', 'LiveChat561783')
        document.body.appendChild(chatEl)
      }
    }
  }, [])

  return (
    <Script
      id="tcx-callus-js"
      src="https://downloads-global.3cx.com/downloads/livechatandtalk/v1/callus.js"
      strategy="afterInteractive"
      charSet="utf-8"
      defer
    />
  )
}
