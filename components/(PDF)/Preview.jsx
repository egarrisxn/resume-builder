'use client'
import {useSearchParams} from 'next/navigation'
import {Suspense} from 'react'

export default function PDFPreview() {
  const searchParams = useSearchParams()
  const pdfUrl = searchParams.get('pdfUrl')

  return (
    <>
      {pdfUrl ? (
        <Suspense fallback={<p>Loading PDF...</p>}>
          <iframe src={pdfUrl} style={{width: '100%', height: '100vh'}} />
        </Suspense>
      ) : (
        <p>No PDF URL provided.</p>
      )}
    </>
  )
}
