'use client'
import {useEffect, useState} from 'react'
import {remark} from 'remark'
import html from 'remark-html'

export default function MarkdownResume() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/resume.md')
      .then((response) => response.text())
      .then((text) => {
        remark()
          .use(html)
          .process(text)
          .then((result) => {
            setContent(result.toString())
          })
      })
  }, [])

  return (
    <div className='my-4'>
      <main dangerouslySetInnerHTML={{__html: content}} />
    </div>
  )
}
