export default function Footer() {
  return (
    <footer className='flex flex-row items-center justify-between border-t-2 bg-white px-2 py-4 sm:px-6 lg:px-12 lg:py-5'>
      <div className='flex flex-row gap-1.5 text-sm sm:gap-4 sm:text-base lg:gap-6'>
        <a target='_blank' rel='noopener noreferrer' href='https://egxo.dev'>
          Contact
        </a>{' '}
        <a
          target='_blank'
          rel='noopener noreferrer'
          href='https://github.com/egarrisxn/resume-builder'
        >
          Source Code
        </a>
      </div>
      <div className='flex text-sm font-bold sm:text-base'>EG|2026</div>
    </footer>
  )
}

// const date = new Date().getFullYear()
// {date}
