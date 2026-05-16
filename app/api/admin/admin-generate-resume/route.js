import {PDFDocument, StandardFonts, rgb} from 'pdf-lib'

export async function POST(req) {
  try {
    const {content} = await req.json()
    const lines = content.split('\n')

    //! Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()

    //! Define page size (US Letter)
    const pageWidth = 8.5 * 72 // 612 points (8.5 inches)
    const pageHeight = 11 * 72 // 792 points (11 inches)

    //! Define page size (A4)
    // const pageWidth = 8.27 * 72 // 595.44 points (8.27 inches)
    // const pageHeight = 11.69 * 72 // 841.68 points (11.69 inches)

    //! Add a page
    const page = pdfDoc.addPage([pageWidth, pageHeight])

    //! Embed fonts
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica)
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)

    let {width, height} = page.getSize()

    //! Font Sizes and Spacing
    const h1 = 19 // Name
    const h2 = 14 // Title
    const h3 = 13 // Section headers
    const h4 = 10.5 // Job/project headers
    const p = 9.5 // Body text

    const lineHeight = 1.2 * p
    const paragraphSpacing = 0.8 * lineHeight
    const bulletSize = p
    const bulletIndent = 7
    const margin = 32
    const maxLineWidth = width - 2 * margin

    //! Initial y position
    let yPosition = height - 48

    //! Define header keywords
    const headerKeywords = {
      'Ethan Garrison': h1,
      'Full Stack Developer': h2,
      Summary: h3,
      Experience: h3,
      'Full Stack Developer (Freelance) | Egxo.dev, Orlando, FL | Jun 2023 - Present': h4,
      'Creative Tech & Event Lead | Sway Bae Official, Orlando, FL | Jan 2023 - Present': h4,
      'Regional Account Manager | Armadillo Ale Works, Denton, TX | Mar 2020 - Jan 2023': h4,
      'Assistant General Manager | Northside Drafthouse, Richardson, TX | May 2018 - Mar 2020': h4,
      'Account Manager | FullClip Craft Distributors, Dallas, TX | Feb 2015 - May 2018': h4,
      'Education & Certifications': h3,
      'Sanity Certified Content Operator | Remote | 2025': h4,
      'Full Stack Web Development Boot Camp | University of Central Florida, Orlando, FL | 2023':
        h4,
      'Business Management | University of Central Oklahoma, Edmond, OK | 2008 - 2009': h4,
      Skills: h3,
      Projects: h3,
      'QuikRes - Resume-to-Website Generator | https://quikres.vercel.app': h4,
      'ManyLinks - Single-Page Link Aggregator | https://manylinks.vercel.app': h4,
    }

    //! Loop through lines
    lines.forEach((line) => {
      if (yPosition < margin) return // Stop if out of space

      const trimmedLine = line.trim()
      const isHeader = headerKeywords.hasOwnProperty(trimmedLine)
      const isBulletPoint = trimmedLine.startsWith('-')

      const currentFont = isHeader ? fontBold : fontRegular
      const currentFontSize = isHeader ? headerKeywords[trimmedLine] || h3 : p

      const textColor =
        trimmedLine === 'Ethan Garrison'
          ? rgb(0.039, 0.58, 0.98) // Blue name
          : rgb(0, 0, 0) // Black text

      if (isBulletPoint) {
        //! Draw bullet point
        page.drawText('•', {
          x: margin,
          y: yPosition,
          size: bulletSize,
          font: fontBold,
          color: rgb(0.039, 0.58, 0.98),
        })

        //! Draw text after bullet point with some indent
        const textAfterBullet = trimmedLine.replace(/^- /, '').trim()

        page.drawText(textAfterBullet, {
          x: margin + bulletIndent,
          y: yPosition,
          size: currentFontSize,
          font: currentFont,
          color: textColor,
        })

        //! Apply additional line spacing for bullet points
        yPosition -= 1.03 * lineHeight
      } else {
        //! Split the line into chunks that fit the page width
        const words = trimmedLine.split(' ')
        let currentLine = ''
        words.forEach((word) => {
          const testLine = `${currentLine} ${word}`.trim()
          const testLineWidth = currentFont.widthOfTextAtSize(testLine, currentFontSize)

          if (testLineWidth < maxLineWidth) {
            currentLine = testLine
          } else {
            //! Draw the current line and reset for the next line
            page.drawText(currentLine, {
              x: margin,
              y: yPosition,
              size: currentFontSize,
              font: currentFont,
              color: textColor,
            })
            yPosition -= lineHeight

            if (yPosition < 0) {
              return //? Stop rendering if there's no space left
            }
            currentLine = word
          }
        })

        //! Draw the last line if any content is left
        if (currentLine) {
          page.drawText(currentLine, {
            x: margin,
            y: yPosition,
            size: currentFontSize,
            font: currentFont,
            color: textColor,
          })
          yPosition -= lineHeight
        }
      }

      //! Extra spacing rules
      if (trimmedLine === 'Ethan Garrison') {
        yPosition -= 0.4 * lineHeight
      }

      if (trimmedLine === 'Full Stack Developer') {
        yPosition -= 0.5 * lineHeight
      }

      if (
        ['Summary', 'Experience', 'Education & Certifications', 'Skills', 'Projects'].includes(
          trimmedLine,
        )
      ) {
        yPosition -= 0.7 * lineHeight
      }

      //! Apply paragraph spacing after empty lines
      if (trimmedLine === '') {
        yPosition -= paragraphSpacing
      }
    })

    //! Save the PDF
    const pdfBytes = await pdfDoc.save()

    //! Return the generated PDF as a response
    return new Response(new Uint8Array(pdfBytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': 'attachment; filename="admin-resume.pdf"',
      },
    })
  } catch (error) {
    console.error('Error generating admin resume:', error)
    return new Response('Failed to generate admin resume', {status: 500})
  }
}
