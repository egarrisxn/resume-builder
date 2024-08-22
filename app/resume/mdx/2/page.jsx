import MDX2Resume from '@/components/(resume)/MDX2Resume'
import Links from '@/components/Links'

export default function MDX2Page() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Links />
      <MDX2Resume />
    </div>
  )
}
