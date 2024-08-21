export function Skills({data}) {
  if (!data) return null

  return (
    <>
      <h3>Technical Skills</h3>
      <ul>
        {data.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </>
  )
}
