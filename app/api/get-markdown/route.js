import fs from 'fs'
import path from 'path'

export async function GET() {
  const filePath = path.join(process.cwd(), 'app/data/resume.md')
  const fileContent = fs.readFileSync(filePath, 'utf8')

  return new Response(fileContent, {
    headers: {
      'Content-Type': 'text/markdown',
    },
  })
}
