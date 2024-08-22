import MDX1Resume from '@/components/(resume)/MDX1Resume'
import Links from '@/components/Links'

export default function MDX1Page() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Links />
      <MDX1Resume />
    </div>
  )
}
