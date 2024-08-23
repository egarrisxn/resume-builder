import {PDFDocument, StandardFonts, rgb} from 'pdf-lib'

export async function POST(req) {
  try {
    const {content} = await req.json()
    const lines = content.split('\n')

    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()

    // Define page size for a standard US Letter
    const pageWidth = 8.5 * 72 // 612 points (8.5 inches)
    const pageHeight = 11 * 72 // 792 points (11 inches)

    // Add a page with the desired size
    const page = pdfDoc.addPage([pageWidth, pageHeight])

    // Embed fonts
    const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const helveticaBoldFont = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    let {width, height} = page.getSize()

    // Font Sizes and Spacing
    const fontSize = 9 // Font size for body text
    const headerFontSize = 9 // Font size for default headers
    const largerHeaderFontSize = 11 // Font size for specific larger headers
    const largestHeaderFontSize = 13 // Font size for largest header
    const lineHeight = 1.1 * fontSize // Line height for body text
    const paragraphSpacing = 0.8 * lineHeight // Paragraph spacing
    const bulletPointSize = fontSize // Bullet point size
    const bulletIndent = 8 // Indent after bullet point
    const margin = 16 // Margin from page edges
    const maxLineWidth = width - 2 * margin // Maximum width for text lines

    // Initial y position for text, starting from top margin
    let yPosition = height - 2.8 * fontSize

    // Define header keywords to identify header lines
    const headerKeywords = {
      'Ethan Garrison (he/him)': largestHeaderFontSize,
      'Full-Stack Developer': largerHeaderFontSize,
      Summary: largerHeaderFontSize,
      'Work Experience': largerHeaderFontSize,
      'Full-Stack Developer | June 2023 - Present': headerFontSize,
      'Regional Account Manager | Aug 2021 - Dec 2022': headerFontSize,
      'Sales Manager | Dec 2019 - Aug 2021': headerFontSize,
      'Assistant General Manager | Mar 2018 - Dec 2019': headerFontSize,
      'Account Manager | Feb 2015 - Mar 2018': headerFontSize,
      'General Manager | Aug 2011 - Feb 2015': headerFontSize,
      'Education & Certifications': largerHeaderFontSize,
      'Certification - Full-Stack Development Boot Camp | Mar 2023 - June 2023': headerFontSize,
      'Studied - Business Management | Aug 2008 - Dec 2009': headerFontSize,
      'Technical Skills': largerHeaderFontSize,
      Projects: largerHeaderFontSize,
      'Sway Bae Official (swaybae.net) | github.com/egarrisxn/swaybaeofficial': headerFontSize,
      'Unofficial Merchandise (unofficialmerchandise.vercel.app) | github.com/egarrisxn/unofficial-merchandise':
        headerFontSize,
      'EGxWorld v1 (egxworld.vercel.app) | github.com/egarrisxn/egxworld-v1': headerFontSize,
      'n00bdev (n00bdev.vercel.app) | github.com/egarrisxn/n00bdev': headerFontSize,
      'EG Movies (eg-angular-movies.netlify.app) | github.com/egarrisxn/eg-angular-movies':
        headerFontSize,
    }

    lines.forEach((line) => {
      if (yPosition < 0) {
        return
      }

      const trimmedLine = line.trim()
      const isHeader = headerKeywords.hasOwnProperty(trimmedLine)
      const isBulletPoint = trimmedLine.startsWith('-')

      // Determine the font and size based on whether it's a header or not
      const currentFont = isHeader ? helveticaBoldFont : helveticaFont
      const currentFontSize = isHeader ? headerKeywords[trimmedLine] || headerFontSize : fontSize

      if (isBulletPoint) {
        // Draw bullet point
        page.drawText('•', {
          x: margin,
          y: yPosition,
          size: bulletPointSize,
          font: helveticaBoldFont,
          color: rgb(0.039, 0.58, 0.98),
        })

        // Draw text after bullet point with some indent
        const textAfterBullet = trimmedLine.replace(/^- /, '').trim()

        page.drawText(textAfterBullet, {
          x: margin + bulletIndent,
          y: yPosition,
          size: currentFontSize,
          font: currentFont,
          color: rgb(0, 0, 0),
        })

        // Apply additional line spacing for bullet points
        yPosition -= 1.0 * lineHeight // Increase spacing after bullet points
      } else {
        // Split the line into chunks that fit the page width
        const words = trimmedLine.split(' ')
        let currentLine = ''
        words.forEach((word) => {
          const testLine = `${currentLine} ${word}`.trim()
          const testLineWidth = currentFont.widthOfTextAtSize(testLine, currentFontSize)

          if (testLineWidth < maxLineWidth) {
            currentLine = testLine
          } else {
            // Draw the current line and reset for the next line
            page.drawText(currentLine, {
              x: margin,
              y: yPosition,
              size: currentFontSize,
              font: currentFont,
              color: rgb(0, 0, 0),
            })
            yPosition -= lineHeight

            if (yPosition < 0) {
              return
            }
            // Set the current line to the word that didn't fit
            currentLine = word
          }
        })

        // Draw the last line if any content is left
        if (currentLine) {
          page.drawText(currentLine, {
            x: margin,
            y: yPosition,
            size: currentFontSize,
            font: currentFont,
            color: rgb(0, 0, 0),
          })
          yPosition -= lineHeight
        }
      }

      // Apply paragraph spacing after empty lines
      if (trimmedLine === '') {
        yPosition -= paragraphSpacing
      }
    })

    const pdfBytes = await pdfDoc.save()

    return new Response(new Uint8Array(pdfBytes), {
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
