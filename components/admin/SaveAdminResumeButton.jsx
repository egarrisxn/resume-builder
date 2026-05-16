'use client'
import {useState, useEffect} from 'react'

export default function SaveAdminResumeButton() {
  const [content, setContent] = useState('')
  const [isSaving, setIsSaving] = useState(false)
  useEffect(() => {
    fetch('/api/admin/admin-fetch-resume')
      .then((response) => response.json())
      .then((data) => setContent(data.content))
      .catch((error) => console.error('Error fetching text file:', error))
  }, [])

  const handleSavePDF = async () => {
    if (!content) return

    setIsSaving(true)

    const response = await fetch('/api/admin/admin-generate-resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({content: content.trim()}),
    }).catch((error) => {
      console.error('Error saving admin resume:', error)
      return null
    })

    if (!response || !response.ok) {
      console.error('Failed to save admin resume')
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
    link.download = 'admin-resume.pdf'
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
      {isSaving ? 'Saving...' : 'Save Resume'}
    </button>
  )
}
