import JSONResume from '@/components/(resume)/JSONResume'
import Header from '@/components/Header'

export default function JSONPage() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Header />
      <h5 className='pb-1 text-center'>
        This resume fetches data from a local JSON file (public/resume.json) and displays it in a
        structured format. It handles loading states and renders sections once the data is
        available.
      </h5>
      <JSONResume />
    </div>
  )
}
