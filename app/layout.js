import './globals.css'

export const metadata = {
  title: 'Smith Labs | Technical Consultation & Product Studio',
  description: 'Daring products and high-quality technical consultation — from New York to Latin America.',
  keywords: 'technical consultation, product studio, fractional CTO, startup consulting',
  authors: [{ name: 'Christian Dean' }],
  openGraph: {
    title: 'Smith Labs',
    description: 'Daring products and high-quality technical consultation — from New York to Latin America.',
    url: 'https://smithlabs.llc',
    siteName: 'Smith Labs',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&family=Oxygen:wght@300;400;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
