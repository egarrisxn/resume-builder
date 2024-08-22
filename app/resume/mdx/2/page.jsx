import MDX2Resume from '@/components/(resume)/MDX2Resume'
import Header from '@/components/Header'

export default function MDX2Page() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Header />
      <h5 className='pb-1 text-center'>
        This resume is rendered using MDX (Markdown with JSX). It converts a static Markdown string
        into HTML with MDXRemote, allowing for rich text formatting and links, and displays all the
        sections.
      </h5>
      <MDX2Resume />
    </div>
  )
}
