import Link from 'next/link'
import PDFButtons from '@/components/(PDF)/Buttons'

export default function ResumesPage() {
  return (
    <>
      <section className='flex flex-col items-start justify-start gap-2 pl-24 pt-24'>
        <h1>Sample resume types.</h1>
        <div className='flex flex-row gap-4'>
          <Link href='/resume/api'>API</Link>
          <Link href='/resume/json'>JSON</Link>
          <Link href='/resume/text'>Text</Link>
          <Link href='/resume/markdown'>Markdown</Link>
          <Link href='/resume/mdx/1'>MDX-1</Link>
          <Link href='/resume/mdx/2'>MDX-2</Link>
        </div>
      </section>
      <section className='flex flex-col items-end justify-end gap-2 pb-24 pr-24'>
        <PDFButtons />
        <h1>Save your resume!</h1>
      </section>
    </>
  )
}
