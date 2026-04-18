import './globals.css'

export const metadata = {
  title: 'Sanjay Fathepur — Full Stack Developer',
  description: 'Full Stack Developer specializing in React.js, Next.js, React Native, Node.js, and Python. Building modern, scalable web and mobile applications.',
  keywords: 'Full Stack Developer, React, Next.js, React Native, Node.js, Python, Hyderabad',
  openGraph: {
    title: 'Sanjay Fathepur — Full Stack Developer',
    description: 'Building modern, scalable web and mobile applications.',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
