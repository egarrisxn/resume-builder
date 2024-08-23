'use client'
import {useState} from 'react'
import SaveButton from './SaveButton'
import ViewButton from './ViewButton'

export default function PDFButtons() {
  const [pdfUrl, setPdfUrl] = useState(null)

  const handleGenerate = (url) => {
    setPdfUrl(url)
  }

  return (
    <section className='flex flex-row gap-4'>
      <div>
        <ViewButton onGenerate={handleGenerate} />
      </div>
      <div>
        <SaveButton onGenerate={handleGenerate} />
      </div>
    </section>
  )
}
