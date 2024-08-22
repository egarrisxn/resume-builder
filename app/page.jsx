import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='flex flex-col items-center gap-2 pt-24'>
        <h1>Resume Builder</h1>
        <Link href='/resumes'>
          <button className='mt-2 rounded bg-slate-500 p-2 text-white'>Let&apos;s Begin</button>
        </Link>
      </section>
    </>
  )
}
