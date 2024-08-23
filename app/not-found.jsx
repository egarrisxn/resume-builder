import Link from 'next/link'

export default function NotFound() {
  return (
    <main>
      <h1>Oh no! This page does not exist.</h1>
      <p>If you feel there was a mistake, please contact me: (egarrisxn@gmail.com).</p>
      <Link href='/'>Home</Link>
    </main>
  )
}
