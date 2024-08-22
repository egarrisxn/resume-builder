'use client'
import dynamic from 'next/dynamic'

const PDFPreview = dynamic(() => import('@/components/(PDF)/Preview'), {ssr: false})

export default function PDFPreviewPage() {
  return <PDFPreview />
}
