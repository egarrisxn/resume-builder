'use client'
import Modal from 'react-modal'

export default function PDFModal({isOpen, onRequestClose, pdfUrl}) {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} contentLabel='PDF Preview'>
      <h2>PDF Preview</h2>
      {pdfUrl ? <iframe src={pdfUrl} style={{width: '100%', height: '80vh'}} /> : <p>Loading...</p>}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  )
}
