import APIResume from '@/components/(resume)/APIResume'
import Links from '@/components/Links'

export default function APIPage() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Links />
      <APIResume />
    </div>
  )
}
