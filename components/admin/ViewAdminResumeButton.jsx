'use client'
import {useRouter} from 'next/navigation'
import {useEffect, useState} from 'react'

export default function ViewAdminResumeButton({}) {
  const [content, setContent] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const router = useRouter()

  useEffect(() => {
    fetch('/api/admin/admin-fetch-resume')
      .then((response) => response.json())
      .then((data) => setContent(data.content))
      .catch((error) => console.error('Error fetching text file:', error))
  }, [])

  const handleGeneratePDF = async () => {
    if (!content) return

    setIsGenerating(true)

    const response = await fetch('/api/admin/admin-generate-resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({content: content.trim()}),
    }).catch((error) => {
      console.error('Error generating resume:', error)
      return null
    })

    if (!response || !response.ok) {
      console.error('Failed to generate admin resume')
      setIsGenerating(false)
      return
    }

    const blob = await response.blob().catch((error) => {
      console.error('Error reading response blob:', error)
      return null
    })

    if (!blob) {
      setIsGenerating(false)
      return
    }

    const url = URL.createObjectURL(blob)
    router.push(`/pdf/admin-preview?pdfUrl=${encodeURIComponent(url)}`)
    setIsGenerating(false)
  }

  return (
    <button
      className='rounded-lg border-2 bg-green-500 px-6 py-2 text-white uppercase shadow-xl hover:bg-green-500/90'
      onClick={handleGeneratePDF}
      disabled={isGenerating}
    >
      {isGenerating ? 'Generating...' : 'View Resume'}
    </button>
  )
}
