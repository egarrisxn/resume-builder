import Link from 'next/link'

export default function Home() {
  return (
    <>
      <section className='mx-auto my-8 flex max-w-[40rem] flex-col gap-4 px-4 sm:mb-0 sm:mt-24 md:px-0'>
        <h1>ATS-Compliant Resume(s)</h1>
        <h4 className='border-l-2 pl-1'>
          This project showcases various ways to display and generate an{' '}
          <span className='font-medium'>ATS-Certified </span> resume, all designed to look
          identical. Built with the Next.js 14 App Router, Tailwind CSS, JavaScript, and other
          technologies, it explores different methods to achieve the same outcome. Whether it&apos;s
          rendering resumes from Markdown, MDX, plain text, or fetching data from a JSON file or an
          API, this project illustrates the flexibility and creativity that can be applied to
          front-end development. Currently, users can create, view, and save their resume as a PDF,
          and future enhancements will enable saving the PDF using all these different file types.
          This project is a fun experiment in demonstrating how the same content can be presented in
          multiple formats, each with its unique advantages and challenges.
        </h4>
        <Link href='/resumes'>
          <button className='w-full rounded bg-slate-800 p-2 text-white hover:bg-slate-950'>
            Let&apos;s Begin
          </button>
        </Link>
      </section>
    </>
  )
}
