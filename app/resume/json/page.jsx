import JSONResume from '@/components/(resume)/JSONResume'
import Links from '@/components/Links'

export default function JSONPage() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Links />
      <JSONResume />
    </div>
  )
}
