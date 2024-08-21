export function Summary({data}) {
  if (!data) return null

  return (
    <>
      <h3>Summary</h3>
      <p>{data}</p>
    </>
  )
}
