'use client'
import {useEffect, useState} from 'react'
import {remark} from 'remark'
import html from 'remark-html'

export default function Markdown1Resume() {
  const [content, setContent] = useState('')

  useEffect(() => {
    fetch('/resume.md')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.text()
      })
      .then((text) => {
        remark()
          .use(html)
          .process(text)
          .then((result) => {
            setContent(result.toString())
          })
          .catch((err) => console.error('Remark processing error:', err))
      })
      .catch((err) => console.error('Fetch error:', err))
  }, [])

  return <main dangerouslySetInnerHTML={{__html: content}} />
}
