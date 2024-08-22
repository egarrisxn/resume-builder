import Link from 'next/link'

export default function Links() {
  return (
    <section className='mx-auto flex flex-row gap-2 border-b-2 text-sm md:border-b-0 md:text-base'>
      <Link href='/resume/api'>API</Link>
      <Link href='/resume/json'>JSON</Link>
      <Link href='/resume/text'>Text</Link>
      <Link href='/resume/markdown'>Markdown</Link>
      <Link href='/resume/mdx/1'>MDX-1</Link>
      <Link href='/resume/mdx/2'>MDX-2</Link>
    </section>
  )
}
