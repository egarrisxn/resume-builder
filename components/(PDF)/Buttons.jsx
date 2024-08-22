'use client'
import {useState} from 'react'
import SaveButton from './SaveButton'
import ViewButton from './ViewButton'
import PDFModal from './Modal'

export default function PDFButtons() {
  const [pdfUrl, setPdfUrl] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleGenerate = (url) => {
    setPdfUrl(url)
    setIsModalOpen(true)
  }

  const handleSave = (url) => {
    setPdfUrl(url)
  }

  return (
    <section className='flex flex-row gap-4'>
      <div>
        <ViewButton onGenerate={handleGenerate} />
        <PDFModal
          isOpen={isModalOpen}
          onRequestClose={() => setIsModalOpen(false)}
          pdfUrl={pdfUrl}
        />
      </div>
      <div>
        <SaveButton onSave={handleSave} />
      </div>
    </section>
  )
}
