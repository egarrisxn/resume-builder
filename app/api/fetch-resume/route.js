import {NextResponse} from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'public', 'resume.txt')

    const content = fs.readFileSync(filePath, 'utf-8')

    return NextResponse.json({content})
  } catch (error) {
    console.error('Error reading file:', error)
    return NextResponse.json({error: 'Failed to read file'}, {status: 500})
  }
}
