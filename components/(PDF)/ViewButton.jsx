'use client'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function ViewButton({onGenerate}) {
  const [content, setContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/fetch-resume')
      .then((response) => response.json())
      .then((data) => setContent(data.content))
      .catch((error) => console.error('Error fetching text file:', error))
  }, [])

  const handleGeneratePDF = async () => {
    if (!content) return

    setIsGenerating(true)
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: content.trim()}),
      })

      if (!response.ok) {
        throw new Error('Failed to generate PDF')
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      router.push(`/pdf/preview?pdfUrl=${encodeURIComponent(url)}`)
    } catch (error) {
      console.error('Error generating PDF:', error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      className='rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600'
      onClick={handleGeneratePDF}
      disabled={isGenerating}
    >
      {isGenerating ? 'Generating...' : 'View PDF'}
    </button>
  )
}
