'use client'

export default function Error({error, reset}) {
  return (
    <main>
      <h1>Oh no! Something went wrong.</h1>
      <p>If you feel there was a mistake, please contact me: (egarrisxn@gmail.com).</p>
      <button onClick={reset}>Try again</button>
      <pre>{error.message}</pre>
    </main>
  )
}
