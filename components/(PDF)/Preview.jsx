'use client'
import {useSearchParams} from 'next/navigation'

export default function PDFPreview() {
  const searchParams = useSearchParams()
  const pdfUrl = searchParams.get('pdfUrl')

  return (
    <>
      {pdfUrl ? (
        <iframe src={pdfUrl} style={{width: '100%', height: '100vh'}} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}
