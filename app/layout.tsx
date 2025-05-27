import './globals.css'
import ResponsiveLayout from './components/Layout/ResponsiveLayout'

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
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" href="/assets/img/favicon.png" sizes="32x32" />
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/img/icon/192x192.png" />
        <script type="module" src="https://cdn.jsdelivr.net/npm/ionicons@latest/dist/ionicons/ionicons.esm.js"></script>
      </head>
      <body>
        <div id="loader" style={{display: 'none'}}>
          <img src="/assets/img/loading-icon.png" alt="icon" className="loading-icon" />
        </div>
        <ResponsiveLayout>{children}</ResponsiveLayout>
      </body>
    </html>
  )
}
