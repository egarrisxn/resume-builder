import Markdown2Resume from '@/components/(resume)/Markdown2Resume'
import Header from '@/components/Header'

export default function Markdown2Page() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Header />
      <h5 className='pb-1 text-center'>
        This resume fetches Markdown content (app/data/resume.md) from an API
        (app/api/get-markdown), converts it to HTML using remark, and renders it on the client-side
        . It provides a way to dynamically display resume content formatted in Markdown.
      </h5>
      <Markdown2Resume />
    </div>
  )
}
