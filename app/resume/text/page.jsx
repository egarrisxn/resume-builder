import TextResume from '@/components/(resume)/TextResume'
import Links from '@/components/Links'

export default function TextPage() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Links />
      <TextResume />
    </div>
  )
}
