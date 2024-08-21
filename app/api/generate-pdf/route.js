import puppeteer from 'puppeteer'

export async function POST(request) {
  const resumeData = await request.json()
  const preview = request.headers.get('x-preview') === 'true'

  if (!resumeData) {
    return new Response('No data provided', {status: 400})
  }

  const htmlContent = `
    <html>
      <head>
        <style>
          body { 
            font-family: Roboto, sans-serif;
          }
            main {
            margin-left: auto;
            margin-right: auto;
            margin-top: 0px;
            margin-bottom: 0px;
            padding-left: 16px;
            padding-right: 16px;
            padding-top: 16px;
            padding-bottom: 16px;
          }
          h1 {
            margin-top: 0px;
            margin-bottom: 0px;
            font-weight: 600;
            font-size: 20px;
            line-height: 20px;
          }
          h2 {
            margin-bottom: 4px;
            margin-top: 4px;
            font-weight: 500;
            font-size: 16px;
            line-height: 16px;
          }
          h3 {
            margin-bottom: 4px;
            margin-top: 8px;
            font-weight: 600;
            font-size: 14px;
            line-height: 14px;
          }
          p {
            margin-bottom: 0px;
            margin-top: 2px;
            font-size: 13px;
            line-height: 13px;
          }
          ul {
            margin-bottom: 6px;
            margin-top: 2px;
            padding-left: 1px;
            list-style-type: disc;
            list-style-position: inside;
          }
          li {
            margin-bottom: 0px;
            margin-top: 2px;
            font-size: 13px;
            line-height: 13px;
          }
        </style>
      </head>

      <body>
        <main>
          <h1>
            ${resumeData.contact.name} ${resumeData.contact.pronouns}
          </h1>
          <h2>
            ${resumeData.contact.title}
          </h2>
          <p>
            ${resumeData.contact.location} | ${resumeData.contact.phone} | ${resumeData.contact.email}
          </p>
          <p>
            ${resumeData.contact.website} | ${resumeData.contact.github} | ${resumeData.contact.linkedin}
          </p>

          <h3>Summary</h3>
          <p>${resumeData.summary}</p>

          <h3>Work Experience</h3>
          ${resumeData.experience
            .map(
              (job) => `
              <p>
                ${job.position}
              </p>
              <p>
                ${job.dates} | ${job.company}, ${job.location}
              </p>
              <ul>
                ${job.responsibilities.map((resp) => `<li>${resp}</li>`).join('')}
              </ul>
              `,
            )
            .join('')}

          <h3>Education & Certifications</h3>
          ${resumeData.education
            .map(
              (edu) => `
                <p>
                  ${edu.degree} - ${edu.field_of_study} | ${edu.dates}
                <p/>
                <p>
                  ${edu.institution}, ${edu.location}
                <p/>
                  ${edu.summary}
                </p>
              `,
            )
            .join('')}

          <h3>Technical Skills</h3>
          <ul>
            ${resumeData.skills.map((skill) => `<li>${skill}</li>`).join('')}
          </ul>
     
          <h3>Projects</h3>
          ${resumeData.projects
            .map(
              (project) => `
                <p>
                ${project.name} (${project.url}) | ${project.github}
                </p>
                <ul>
                  ${project.description.map((desc) => `<li>${desc}</li>`).join('')}
                </ul>
              `,
            )
            .join('')}
        </main>
      </body>
    </html>
  `
  try {
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-features=IsolateOrigins',
        '--disable-site-isolation-trials',
        '--autoplay-policy=user-gesture-required',
        '--disable-background-networking',
        '--disable-background-timer-throttling',
        '--disable-backgrounding-occluded-windows',
        '--disable-breakpad',
        '--disable-client-side-phishing-detection',
        '--disable-component-update',
        '--disable-default-apps',
        '--disable-dev-shm-usage',
        '--disable-domain-reliability',
        '--disable-extensions',
        '--disable-features=AudioServiceOutOfProcess',
        '--disable-hang-monitor',
        '--disable-ipc-flooding-protection',
        '--disable-notifications',
        '--disable-offer-store-unmasked-wallet-cards',
        '--disable-popup-blocking',
        '--disable-prompt-on-repost',
        '--disable-speech-api',
        '--hide-scrollbars',
        '--ignore-gpu-blacklist',
        '--metrics-recording-only',
        '--mute-audio',
        '--no-default-browser-check',
        '--no-first-run',
        '--no-pings',
        '--no-zygote',
        '--password-store=basic',
        '--use-gl=swiftshader',
        '--use-mock-keychain',
      ], //! Add these args if running in restricted environment
    })
    const page = await browser.newPage()
    await page.setContent(htmlContent)
    const pdfBuffer = await page.pdf({format: 'A4'})
    await browser.close()

    return new Response(pdfBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': preview
          ? 'inline; filename="resume.pdf"'
          : 'attachment; filename="resume.pdf"',
      },
    })
  } catch (error) {
    console.error('Error generating PDF:', error)
    return new Response('Failed to generate PDF', {status: 500})
  }
}
