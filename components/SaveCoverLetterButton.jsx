'use client'
import {useState, useEffect} from 'react'

export default function SaveCoverLetterButton({}) {
  const [content, setContent] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    fetch('/api/fetch-cover-letter')
      .then((response) => response.json())
      .then((data) => setContent(data.content))
      .catch((error) => console.error('Error fetching text file:', error))
  }, [])

  const handleSavePDF = async () => {
    if (!content) return

    setIsSaving(true)

    const response = await fetch('/api/generate-cover-letter', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({content: content.trim()}),
    }).catch((error) => {
      console.error('Error saving cover letter:', error)
      return null
    })

    if (!response || !response.ok) {
      console.error('Failed to save cover letter')
      setIsSaving(false)
      return
    }

    const blob = await response.blob().catch((error) => {
      console.error('Error reading response blob:', error)
      return null
    })

    if (!blob) {
      setIsSaving(false)
      return
    }

    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'cover-letter.pdf'
    link.click()
    URL.revokeObjectURL(url)
    setIsSaving(false)
  }

  return (
    <button
      className='rounded-lg border-2 bg-blue-500 px-6 py-2 text-white uppercase shadow-xl hover:bg-blue-500/90'
      onClick={handleSavePDF}
      disabled={isSaving}
    >
      {isSaving ? 'Saving...' : 'Save Cover Letter'}
    </button>
  )
}
