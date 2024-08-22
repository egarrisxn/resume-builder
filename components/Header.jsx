import Link from 'next/link'

export default function Header() {
  return (
    <header className='mx-auto flex flex-row gap-2 border-b-2 border-slate-400 text-sm md:text-base'>
      <Link href='/resume/api'>API</Link>
      <Link href='/resume/json'>JSON</Link>
      <Link href='/resume/text'>TEXT</Link>
      <Link href='/resume/markdown/1'>MD1</Link>
      <Link href='/resume/markdown/2'>MD2</Link>
      <Link href='/resume/mdx/1'>MDX1</Link>
      <Link href='/resume/mdx/2'>MDX2</Link>
    </header>
  )
}
