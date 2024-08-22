'use client'
import {useEffect, useState} from 'react'

export default function JSONResume() {
  const [resume, setResume] = useState(null)

  useEffect(() => {
    fetch('/resume.json')
      .then((response) => response.json())
      .then((data) => setResume(data))
  }, [])

  if (!resume) return <div>Loading...</div>

  return (
    <main>
      <h1>
        {resume.contact.name} {resume.contact.pronouns}
      </h1>
      <h2>{resume.contact.title}</h2>
      <p>
        {resume.contact.location} |{' '}
        <a href={`tel:${resume.contact.phone}`}>{resume.contact.phone}</a> |{' '}
        <a href={`mailto:${resume.contact.email}`}>{resume.contact.email}</a>{' '}
      </p>
      <p>
        <a href={`https://${resume.contact.website}`} target='_blank'>
          {resume.contact.website}
        </a>{' '}
        |{' '}
        <a href={`https://${resume.contact.github}`} target='_blank'>
          {resume.contact.github}
        </a>{' '}
        |{' '}
        <a href={`https://${resume.contact.linkedin}`} target='_blank'>
          {resume.contact.linkedin}
        </a>
      </p>

      <h3>Summary</h3>
      <p>{resume.summary}</p>

      <h3>Work Experience</h3>
      {resume.experience.map((job, index) => (
        <div key={index}>
          <p>{job.position}</p>
          <p>
            <span className='italic'>{job.dates}</span> | {job.company}, {job.location}
          </p>
          <ul>
            {job.responsibilities.map((description, idx) => (
              <li key={idx}>{description}</li>
            ))}
          </ul>
        </div>
      ))}

      <h3>Education & Certifications</h3>
      {resume.education.map((edu, index) => (
        <div key={index}>
          <p>
            <span className='font-bold'>{edu.degree}</span> - {edu.field_of_study} |{' '}
            <span className='italic'>{edu.dates}</span>
          </p>
          <p>
            {edu.institution}, {edu.location}
          </p>
          <p>
            <span className='italic'>{edu.summary}</span>
          </p>
        </div>
      ))}

      <h3>Technical Skills</h3>
      <ul>
        {resume.skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <h3>Projects</h3>
      {resume.projects.map((project, index) => (
        <div key={index}>
          <p>
            {project.name}{' '}
            <a href={`https://${project.url}`} target='_blank'>
              ({project.url})
            </a>{' '}
            |{' '}
            <a href={`https://${project.github}`} target='_blank'>
              {project.github}
            </a>
          </p>
          <ul>
            {project.description.map((description, idx) => (
              <li key={idx}>{description}</li>
            ))}
          </ul>
        </div>
      ))}
    </main>
  )
}
