'use client'
import {useState} from 'react'
import ViewResumeButton from './ViewResumeButton'
import ViewCoverLetterButton from './ViewCoverLetterButton'
import SaveResumeButton from './SaveResumeButton'
import SaveCoverLetterButton from './SaveCoverLetterButton'

export default function AllButtons() {
  const [, setPdfUrl] = useState(null)

  const handleGenerate = (url) => {
    setPdfUrl(url)
  }

  return (
    <div className='flex w-fit flex-col gap-4'>
      <section className='flex flex-col gap-4 sm:flex-row'>
        <ViewResumeButton onGenerate={handleGenerate} />
        <ViewCoverLetterButton onGenerate={handleGenerate} />
      </section>
      <section className='flex flex-col gap-4 sm:flex-row'>
        <SaveResumeButton onGenerate={handleGenerate} />
        <SaveCoverLetterButton onGenerate={handleGenerate} />
      </section>
    </div>
  )
}
