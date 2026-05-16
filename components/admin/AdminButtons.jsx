'use client'
import {useState} from 'react'
import ViewAdminResumeButton from './ViewAdminResumeButton'
import ViewAdminCoverLetterButton from './ViewAdminCoverLetterButton'
import SaveAdminResumeButton from './SaveAdminResumeButton'
import SaveAdminCoverLetterButton from './SaveAdminCoverLetterButton'

export default function AdminButtons() {
  const [, setPdfUrl] = useState(null)

  const handleGenerate = (url) => {
    setPdfUrl(url)
  }

  return (
    <div className='flex flex-col gap-4'>
      <section className='flex flex-col gap-4 sm:flex-row'>
        <ViewAdminResumeButton onGenerate={handleGenerate} />
        <ViewAdminCoverLetterButton onGenerate={handleGenerate} />
      </section>
      <section className='flex flex-col gap-4 sm:flex-row'>
        <SaveAdminResumeButton onGenerate={handleGenerate} />
        <SaveAdminCoverLetterButton onGenerate={handleGenerate} />
      </section>
    </div>
  )
}
