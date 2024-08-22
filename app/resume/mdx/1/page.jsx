import MDX1Resume from '@/components/(resume)/MDX1Resume'
import Header from '@/components/Header'

export default function MDX1Page() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Header />
      <h5 className='pb-1 text-center'>
        This resume reads an MDX file from the server-side (app/data/resume.mdx), compiles it, and
        renders the content dynamically on the client-side. It provides a flexible and customizable
        way to display resume information.
      </h5>
      <MDX1Resume />
    </div>
  )
}
