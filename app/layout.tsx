import './globals.css'
import ResponsiveLayout from './components/Layout/ResponsiveLayout'
import Script from 'next/script'

export const metadata = {
  title: 'Smart Wallet',
  description: 'Your digital wallet application',
  manifest: '/manifest.json',
  themeColor: '#000000',
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
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/icon/192x192.png" />
      </head>
      <body>
        <div id="loader" style={{display: 'none'}}>
          <img src="/assets/img/loading-icon.png" alt="icon" className="loading-icon" />
        </div>
        <ResponsiveLayout>{children}</ResponsiveLayout>
        
        {/* Load Ionicons script asynchronously */}
        <Script 
          src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js" 
          type="module"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}
