import Link from 'next/link'

export default function NotFound() {
  return (
    <section className='mx-auto my-8 flex max-w-[40rem] flex-col'>
      <h1>Oh no! This page does not exist.</h1>
      <h4>If you feel there was a mistake, please contact me: (egarrisxn@gmail.com).</h4>
      <Link href='/'>Home</Link>
    </section>
  )
}
