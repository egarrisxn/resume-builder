'use client'
export default function Error({error, reset}) {
  return (
    <section className='mx-auto my-8 flex max-w-[40rem] flex-col'>
      <h1>Oh no! Something went wrong.</h1>
      <h4>If you feel there was a mistake, please contact me: (egarrisxn@gmail.com).</h4>
      <button onClick={reset}>Try again</button>
      {/* <pre>{error.message}</pre> */}
    </section>
  )
}
