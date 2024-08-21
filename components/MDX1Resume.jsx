import fs from 'fs'
import path from 'path'
import {compileMDX} from 'next-mdx-remote/rsc'

export async function MDX1() {
  const filePath = path.join(process.cwd(), 'app', 'data', 'resume.mdx')
  const fileContent = fs.readFileSync(filePath, {encoding: 'utf8'})

  const {content} = await compileMDX({
    source: fileContent,
  })

  return {content}
}

export default async function MDX1Resume({params}) {
  const {content} = await MDX1(params)

  return (
    <div className='my-4'>
      <main>{content}</main>
    </div>
  )
}
