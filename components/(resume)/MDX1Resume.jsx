import {compileMDX} from 'next-mdx-remote/rsc'
import fs from 'fs'
import path from 'path'

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

  return <main>{content}</main>
}
