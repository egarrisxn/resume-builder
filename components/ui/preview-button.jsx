'use client'

export default function PreviewButton({resumeData}) {
  const handlePreview = async () => {
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-preview': 'true',
        },
        body: JSON.stringify(resumeData),
      })

      if (!response.ok) {
        throw new Error('Failed to generate PDF')
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)

      //! Open the PDF in a new tab
      window.open(url, '_blank')
    } catch (error) {
      console.error('Error generating PDF:', error)
    }
  }

  return (
    <div>
      <button onClick={handlePreview} className='mt-2 rounded bg-blue-500 p-2 text-white'>
        Preview PDF
      </button>
    </div>
  )
}
