import './globals.css'
import {Roboto} from 'next/font/google'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
})

export default function RootLayout({children}) {
  return (
    <html lang='en'>
      <body className={`${roboto.className} grid min-h-[100dvh] grid-rows-[auto_1fr_auto]`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
