import Link from 'next/link'

export default function Header() {
  return (
    <header className='flex h-10 flex-row items-center justify-end gap-8 border-b-2 border-slate-400 bg-white pr-12'>
      <Link href='/pdf-resume'>PDF</Link>
      <Link href='/api-resume'>API Data</Link>
      <Link href='/json-resume'>Local JSON</Link>
      <Link href='/text-resume'>Plain Text</Link>
      <Link href='/markdown-resume'>Markdown</Link>
      <div>
        <Link href='/mdx1-resume'>MDX1</Link> / <Link href='/mdx2-resume'>MDX2</Link>
      </div>
    </header>
  )
}
