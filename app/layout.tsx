import './globals.css'
import { ThirdwebProvider } from "thirdweb/react";
// import ResponsiveLayout from './components/Layout/ResponsiveLayout' 163563 6236FF
import SimpleLayout from './components/Layout/SimpleLayout'
import Script from 'next/script'

export const metadata = {
  title: 'LegacyFeeder',
  description: 'Your digital wallet application',
  manifest: '/manifest.json',
}

export const viewport = {
  themeColor: '#163563',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css" rel="stylesheet" />
        <link href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap" rel="stylesheet" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img//apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/img//favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/img//favicon-16x16.png" />
        <link rel="manifest" href="/assets/img//site.webmanifest" />
      </head>
      <body>
        {/* Wrap everything in ThirdwebProvider */}
        <ThirdwebProvider>
          <div id="loader" style={{display: 'none'}}>
            <img src="/assets/img/loading-icon.png" alt="icon" className="loading-icon" />
          </div>
          
          <SimpleLayout>
            {children}
          </SimpleLayout>
        </ThirdwebProvider>
        
        <Script 
          src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js" 
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
