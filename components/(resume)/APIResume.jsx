'use client'
import {useEffect, useState} from 'react'
import {Contact} from '@/components/sections/contact'
import {Summary} from '@/components/sections/summary'
import {Experience} from '@/components/sections/experience'
import {Education} from '@/components/sections/education'
import {Skills} from '@/components/sections/skills'
import {Projects} from '@/components/sections/projects'

export default function APIResume() {
  const [resumeData, setResumeData] = useState({
    contact: {
      name: '',
      title: '',
      email: '',
      phone: '',
      location: '',
      website: '',
      github: '',
      linkedin: '',
    },
    summary: '',
    experience: [],
    education: [],
    skills: [],
    projects: [],
  })

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/resume-data')
        const data = await response.json()
        setResumeData(data)
      } catch (error) {
        console.error('Error fetching resume data:', error)
      }
    }
    fetchData()
  }, [])

  return (
    <main id='resume'>
      <Contact data={resumeData.contact} />
      <Summary data={resumeData.summary} />
      <Experience data={resumeData.experience} />
      <Education data={resumeData.education} />
      <Skills data={resumeData.skills} />
      <Projects data={resumeData.projects} />
    </main>
  )
}
