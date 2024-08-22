import Link from 'next/link'
import PDFButtons from '@/components/(PDF)/Buttons'

export default function ResumesPage() {
  return (
    <>
      <section className='mt-4 flex flex-col items-start justify-start gap-2 pl-4 text-sm sm:mt-24 sm:pl-24'>
        <h1>Different ways to resume!</h1>
        <p>
          <span className='font-medium'>Note: </span>Examples vary from final PDF version.
        </p>
        <div className='flex flex-row gap-2'>
          <Link href='/resume/api'>API</Link>
          <Link href='/resume/json'>JSON</Link>
          <Link href='/resume/text'>TEXT</Link>
          <Link href='/resume/markdown/1'>MD1</Link>
          <Link href='/resume/markdown/2'>MD2</Link>
          <Link href='/resume/mdx/1'>MDX1</Link>
          <Link href='/resume/mdx/2'>MDX2</Link>
        </div>
      </section>
      <section className='mb-4 flex flex-col items-end justify-end gap-2 pr-4 text-sm sm:mb-24 sm:pr-24'>
        <h1>Generate yours now!</h1>
        <p>
          <span className='font-medium'>Note: </span>Must clone project to start.
        </p>
        <PDFButtons />
      </section>
    </>
  )
}
