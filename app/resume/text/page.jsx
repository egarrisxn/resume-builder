import TextResume from '@/components/(resume)/TextResume'
import Header from '@/components/Header'

export default function TextPage() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Header />
      <h5 className='pb-1 text-center'>
        This resume renders a static resume with detailed sections. It displays all the information
        directly without fetching data from an external source.
      </h5>
      <TextResume />
    </div>
  )
}
