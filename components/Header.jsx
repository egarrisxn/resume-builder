import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex h-10 flex-row items-center justify-end gap-8 border-b-2 border-slate-400 bg-white pr-24'>
      <Link href='/'>Home</Link>
      <Link href='/resumes'>Resumes</Link>
    </header>
  )
}
