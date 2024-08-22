'use client'
import {useState, useEffect} from 'react'

export default function SaveButton({onSave}) {
  const [content, setContent] = useState('')
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    fetch('/api/fetch-resume')
      .then((response) => response.json())
      .then((data) => setContent(data.content))
      .catch((error) => console.error('Error fetching text file:', error))
  }, [])

  const handleSavePDF = async () => {
    if (!content) return

    setIsSaving(true)
    try {
      const response = await fetch('/api/generate-pdf', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({content: content.trim()}),
      })

      if (!response.ok) {
        throw new Error('Failed to save PDF')
      }

      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = 'resume.pdf'
      link.click()
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Error saving PDF:', error)
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <button
      className='mt-2 rounded bg-blue-500 p-2 text-white'
      onClick={handleSavePDF}
      disabled={isSaving}
    >
      {isSaving ? 'Saving...' : 'Save PDF'}
    </button>
  )
}

// export default function SavePDFButton() {
//   const [isSaving, setIsSaving] = useState(false)

//   const handleSavePDF = async () => {
//     setIsSaving(true)
//     try {
//       const content = `
//         Ethan Garrison (he/him)
//         Full-Stack Developer
//         Orlando, Florida, United States | +15802844513 | Egarrisxn@gmail.com
//         egxworld.net | github.com/egarrisxn | linkedin.com/in/ethan-gx

//         Summary

//         Dynamic Full-Stack Developer with a strong foundation in management, now focused on front-end development and server-side
//         programming. Skilled in creating responsive and accessible user interfaces, managing databases, and integrating APIs. Proficient in Agile
//         methodologies and optimization, delivering scalable web solutions that meet user needs and business goals.

//         Work Experience

//         Full-Stack Developer | June 2023 - Present
//         Freelance, Orlando, Florida, United States
//         - Develop and deploy applications using modern frameworks like React and Node.js, delivering scalable solutions for client needs.
//         - Implement responsive, accessible design principles for optimal user experience and standards compliance.

//         Regional Account Manager | Aug 2021 - Dec 2022
//         Roughtail Brewing Company, Edmond, Oklahoma, United States
//         - Boosted regional sales by 20% through targeted marketing campaigns and strategic partnerships with distributors.
//         - Streamlined coordination between sales and production teams, enhancing efficiency and alignment across departments.

//         Sales Manager | Dec 2019 - Aug 2021
//         Armadillo Ale Works, Denton, Texas, United States
//         - Drove a 25% increase in sales by expanding market reach and establishing strong distributor relationships.
//         - Championed collaborative strategies between sales, marketing, and production teams, aligning efforts to meet company growth objectives.

//         Assistant General Manager | Mar 2018 - Dec 2019
//         Northside Drafthouse, Richardson, Texas, United States
//         - Achieved significant reduction in costs through operational improvements, while upholding high service standards.
//         - Led a team of 15+ employees, instilling a culture of continuous improvement and setting new standards for service excellence.

//         Account Manager | Feb 2015 - Mar 2018
//         FullClip Craft Distributors, Dallas, Texas, United States
//         - Strengthened client relationships and improved satisfaction, leading to increased retention and customer loyalty.
//         - Educated clients on trending products, resulting in higher engagement and repeat business.

//         General Manager | Aug 2011 - Feb 2015
//         Dallas Beer Kitchen, Dallas, Texas, United States
//         - Enhanced team productivity, driving operational efficiency and achieving significant performance improvements.
//         - Fostered a culture of innovation, leading to continuous operational enhancements and setting new benchmarks for the business.

//         Education & Certifications

//         Certification - Full-Stack Development Boot Camp | Mar 2023 - June 2023
//         University of Central Florida, Orlando, Florida, United States
//         Credentials: badgr.com/public/assertions/zGk2wldtSXqeMhEOz2wX5Q

//         Studied - Business Management | Aug 2008 - Dec 2009
//         University of Central Oklahoma, Edmond, Oklahoma, United States

//         Technical Skills

//         Front-End Development: HTML, CSS, JavaScript, TypeScript, React, Next.js, Angular, Astro, Tailwind CSS
//         Back-End Development: Node.js, Express.js, REST APIs, MongoDB, MySQL, PostgreSQL, GraphQL
//         DevOps/Tools: Git, Webpack, Vite, ESLint, Sanity, Supabase, Vercel, Heroku, npm, pnpm
//         Best Practices & Methodologies: Agile, Continuous Integration & Deployment, Performance Optimization, SEO
//         Soft Skills: Project Management, Leadership, Communication, Adaptability, Teamwork

//         Projects

//         Sway Bae Official (swaybae.net) | github.com/egarrisxn/swaybaeofficial
//         - Developed a website for a content creator, focusing on SEO best practices and seamless integration with a headless CMS.
//         - Tech Stack: JavaScript, Node.js, React, Next.js, Sanity, Tailwind CSS, daisyUI.

//         Unofficial Merchandise (unofficialmerchandise.vercel.app) | github.com/egarrisxn/unofficial-merchandise
//         - Built a modern e-commerce storefront with a client-centric design, optimizing user experience and potential sales conversion.
//         - Tech Stack: JavaScript, Node.js, React, Next.js, Sanity, Stripe, Tailwind CSS.

//         EGxWorld v1 (egxworld.vercel.app) | github.com/egarrisxn/egxworld-v1
//         - Created a personal website and portfolio, highlighting projects and skills with a clean and responsive design.
//         - Tech Stack: JavaScript, Node.js, React, Next.js, Tailwind CSS, shadcn/ui.

//         n00bdev (n00bdev.vercel.app) | github.com/egarrisxn/n00bdev
//         - Developed a server-side rendered blog, focusing on delivering insightful content with optimal performance.
//         - Tech Stack: TypeScript, Node.js, Astro, Tailwind CSS.

//         EG Movies (eg-angular-movies.netlify.app) | github.com/egarrisxn/eg-angular-movies
//         - Built an intuitive movie database application featuring detailed information and a user-friendly interface.
//         - Tech Stack: TypeScript, Node.js, Angular, Tailwind CSS.
//       `.trim()

//       const response = await fetch('/api/save-pdf', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({content}),
//       })

//       if (!response.ok) {
//         throw new Error('Failed to save PDF')
//       }

//       const blob = await response.blob()
//       const url = URL.createObjectURL(blob)
//       const link = document.createElement('a')
//       link.href = url
//       link.download = 'resume.pdf'
//       link.click()
//       URL.revokeObjectURL(url)
//     } catch (error) {
//       console.error('Error saving PDF:', error)
//     } finally {
//       setIsSaving(false)
//     }
//   }
