import './globals.css'
import {Roboto} from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://resume-builder-omega-beige.vercel.app'),
  title: 'Resume Builder.',
  description: 'ATS Certified Resume',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'nextjs, next14, react, reactjs, tailwindcss, javascript, mdx, markdown, json, api, resume, resume-builder',
  ],
  creator: {name: 'Ethan Garrison', url: 'https://github.com/egarrisxn'},
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Resume Builder.',
    description: 'ATS Certified Resume',
    url: 'https://resume-builder-omega-beige.vercel.app',
    siteName: 'resume-builder-omega-beige.vercel.app',
  },
  twitter: {
    cardType: 'summary_large_image',
    handle: 'eg__xo',
    site: 'https://x.com/eg__xo',
    title: 'Resume Builder.',
    description: 'ATS Certified Resume',
  },
}

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} grid min-h-[100dvh] grid-rows-[auto_1fr_auto]`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
