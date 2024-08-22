import MarkdownResume from '@/components/(resume)/MarkdownResume'
import Links from '@/components/Links'

export default function MarkdownPage() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Links />
      <MarkdownResume />
    </div>
  )
}
