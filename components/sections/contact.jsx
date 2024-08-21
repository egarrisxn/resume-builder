export function Contact({data}) {
  if (!data) return null

  return (
    <section>
      <h1>
        {data.name} {data.pronouns}
      </h1>
      <h2>{data.title}</h2>
      <p>
        {data.location} | {data.phone} | {data.email}
      </p>
      <p>
        {data.website} | {data.github} | {data.linkedin}
      </p>
    </section>
  )
}
