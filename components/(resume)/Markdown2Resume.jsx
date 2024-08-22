'use client'
import {useEffect, useState} from 'react'
import {remark} from 'remark'
import html from 'remark-html'

export default function Markdown2Resume() {
  const [content, setContent] = useState('')

  useEffect(() => {
    const fetchMarkdown = async () => {
      try {
        const response = await fetch('/api/get-markdown')
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const markdownText = await response.text()
        const processedContent = await remark().use(html).process(markdownText)
        setContent(processedContent.toString())
      } catch (error) {
        console.error('Error fetching Markdown:', error)
      }
    }

    fetchMarkdown()
  }, [])

  return <main dangerouslySetInnerHTML={{__html: content}} />
}

// 'use client'

// import {useEffect, useState} from 'react'
// import {remark} from 'remark'
// import html from 'remark-html'

// export default function Markdown2Resume() {
//   const [content, setContent] = useState('')

//   useEffect(() => {
//     fetch('/api/get-markdown')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok')
//         }
//         return response.text()
//       })
//       .then((text) => {
//         remark()
//           .use(html)
//           .process(text)
//           .then((result) => {
//             setContent(result.toString())
//           })
//           .catch((err) => console.error('Remark processing error:', err))
//       })
//       .catch((err) => console.error('Fetch error:', err))
//   }, [])

//   return <main dangerouslySetInnerHTML={{__html: content}} />
// }
