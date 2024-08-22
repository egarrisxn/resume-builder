import {PDFDocument, StandardFonts, rgb} from 'pdf-lib'

export async function POST(req) {
  try {
    const {content} = await req.json()
    const lines = content.split('\n')

    const pdfDoc = await PDFDocument.create([794, 1123])
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const page = pdfDoc.addPage()

    let {width, height} = page.getSize()

    const fontSize = 11
    const lineHeight = 1 * fontSize
    const paragraphSpacing = 0.7 * lineHeight

    lines.forEach((line, index) => {
      const yPosition = height - 2 * fontSize - index * lineHeight
      page.drawText(line.trim(), {
        x: 16,
        y: yPosition,
        size: fontSize,
        font: helveticaFont,
        color: rgb(0, 0, 0),
      })

      if (line === '') {
        height -= paragraphSpacing - lineHeight
      }
    })

    const pdfBytes = await pdfDoc.save()

    return new Response(pdfBytes, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="resume.pdf"',
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return new Response('Failed to generate PDF', {status: 500})
  }
}
