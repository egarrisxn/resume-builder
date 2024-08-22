import Markdown1Resume from '@/components/(resume)/Markdown1Resume'
import Header from '@/components/Header'

export default function Markdown1Page() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Header />
      <h5 className='pb-1 text-center'>
        This resume fetches Markdown content from a local file (public/resume.md), converts it to
        HTML using remark, and renders it on the client-side. It provides a way to display static
        resume content formatted in Markdown.
      </h5>
      <Markdown1Resume />
    </div>
  )
}
