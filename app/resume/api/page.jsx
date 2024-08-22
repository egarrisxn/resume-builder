import APIResume from '@/components/(resume)/APIResume'
import Header from '@/components/Header'

export default function APIPage() {
  return (
    <div className='mX-auto my-4 flex flex-col gap-2'>
      <Header />
      <h5 className='pb-1 text-center'>
        This resume fetches data from an API endpoint (app/api/resume-data) and displays it using
        various section components (components/sections/index). It initializes with empty state,
        updates with fetched data, and renders the sections.
      </h5>
      <APIResume />
    </div>
  )
}
