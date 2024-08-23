'use client'
import {useState, useEffect} from 'react'

export default function SaveButton({onGenerate}) {
  const [content, setContent] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    fetch('/api/fetch-resume')
      .then((response) => response.json())
      .then((data) => setContent(data.content))
      .catch((error) => console.error('Error fetching text file:', error))
  }, [])

  const handleSavePDF = async () => {
    if (!content) return

    setIsSaving(true)
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: content.trim()}),
      })

      if (!response.ok) {
        throw new Error('Failed to save PDF')
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'resume.pdf'
      link.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error saving PDF:', error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <button
      className='rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
      onClick={handleSavePDF}
      disabled={isSaving}
    >
      {isSaving ? 'Saving...' : 'Save PDF'}
    </button>
  )
}
