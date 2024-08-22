import Link from 'next/link'
import PDFButtons from '@/components/(PDF)/Buttons'

export default function ResumesPage() {
  return (
    <>
      <section className='flex flex-col items-start justify-start gap-2 pl-4 pt-4 text-sm sm:pl-24 sm:pt-24 sm:text-base'>
        <h1>Different ways to resume!</h1>
        <div className='flex flex-col gap-2 sm:flex-row sm:gap-4'>
          <Link href='/resume/api'>API</Link>
          <Link href='/resume/json'>JSON</Link>
          <Link href='/resume/text'>Text</Link>
          <Link href='/resume/markdown'>Markdown</Link>
          <Link href='/resume/mdx/1'>MDX-1</Link>
          <Link href='/resume/mdx/2'>MDX-2</Link>
        </div>
      </section>
      <section className='flex flex-col items-end justify-end gap-2 pb-4 pr-4 text-sm sm:pb-24 sm:pr-24 sm:text-base'>
        <PDFButtons />
        <h1>Save yours now!</h1>
      </section>
    </>
  )
}
