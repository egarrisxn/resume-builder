import Link from 'next/link'

export const metadata = {
  title: 'Docs',
  description: 'Documentation for Resbuilder.',
}

export default function DocsPage() {
  return (
    <div className='mx-auto my-16 grid w-full max-w-4xl gap-6 overflow-hidden lg:grid-cols-5 xl:max-w-(--breakpoint-2xl)'>
      <section className='p-4 md:p-8 lg:col-span-3 lg:p-6'>
        <div className='mb-6'>
          <div className='text-2 mb-2 leading-tight font-extrabold tracking-tight text-slate-900 sm:text-3xl md:text-4xl'>
            Create Your ATS Resume & Cover Letter
          </div>
          <div className='w-full max-w-3xl text-slate-600 md:text-lg'>
            Follow these detailed steps to set up and customize your resume and cover letter for
            Applicant Tracking Systems.
          </div>
        </div>
        <div className='mb-8 xl:mr-8'>
          <div className='mb-4 text-xl font-semibold text-slate-900 md:text-2xl'>
            Getting Started
          </div>
          <div className='relative ml-2 border-l border-slate-300 md:ml-4'>
            <div className='mb-6 ml-4 md:ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>01</div>
              </div>
              <div className='pb-4'>
                <div className='mb-1 font-semibold text-slate-900'>Visit the GitHub Repository</div>
                <div className='text-sm text-slate-700 md:text-base'>
                  Navigate to the projects GitHub page to access the source code and further
                  instructions.
                </div>
                <a
                  href='https://github.com/egarrisxn/resume-builder'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='mt-2 inline-flex items-center rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none'
                >
                  View on GitHub.
                </a>
              </div>
            </div>
            <div className='mb-6 ml-4 md:ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>02</div>
              </div>
              <div className='pb-4'>
                <div className='mb-1 font-semibold text-slate-900'>
                  Clone the Project Repository
                </div>
                <div className='text-sm text-slate-700 md:text-base'>
                  Open your terminal or command prompt and clone the repository to your local
                  development environment using the `git clone` command followed by the repository
                  URL.
                </div>
                <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-slate-200 p-2 text-xs tracking-tighter text-slate-800 sm:max-w-none sm:p-3 sm:text-sm'>
                  <code>git clone https://github.com/egarrisxn/resume-builder.git</code>
                </pre>
              </div>
            </div>
            <div className='mb-6 ml-4 md:ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>03</div>
              </div>
              <div className='pb-4'>
                <div className='mb-1 font-semibold text-slate-900'>
                  Install Project Dependencies
                </div>
                <div className='text-sm text-slate-700 md:text-base'>
                  Navigate into the cloned project directory in your terminal and install the
                  necessary dependencies using either `npm` or `yarn`.
                </div>
                <div className='mt-2 flex gap-2'>
                  <pre className='overflow-x-auto rounded-md bg-slate-200 p-2 text-xs text-slate-800 sm:p-3 sm:text-sm'>
                    <code>npm install</code>
                  </pre>
                  <pre className='overflow-x-auto rounded-md bg-slate-200 p-2 text-xs text-slate-800 sm:p-3 sm:text-sm'>
                    <code>yarn install</code>
                  </pre>
                </div>
              </div>
            </div>
            <div className='mb-6 ml-4 md:ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>04</div>
              </div>
              <div className='pb-4'>
                <div className='mb-1 font-semibold text-slate-900'>
                  Start Local Development Server
                </div>
                <div className='text-sm text-slate-700 md:text-base'>
                  Start the local development server to preview and work on your resume and cover
                  letter. This usually involves running a command provided by the project.
                </div>
                <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-slate-200 p-2 text-xs tracking-tighter text-slate-800 sm:max-w-none sm:p-3 sm:text-sm'>
                  <code>npm run dev</code>
                </pre>
                <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-slate-200 p-2 text-xs tracking-tighter text-slate-800 sm:max-w-none sm:p-3 sm:text-sm'>
                  <code>yarn dev</code>
                </pre>
              </div>
            </div>
            <div className='mb-6 ml-4 md:ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>05</div>
              </div>
              <div className='pb-4'>
                <div className='mb-1 font-semibold text-slate-900'>Locate Template Files</div>
                <div className='text-sm text-slate-700 md:text-base'>
                  Find the template files for your resume and cover letter within the{' '}
                  <code>public</code> directory of the project.
                </div>
                <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-slate-200 p-2 text-xs tracking-tighter text-slate-800 sm:max-w-none sm:p-3 sm:text-sm'>
                  <code>public/resume</code>
                </pre>
                <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-slate-200 p-2 text-xs tracking-tighter text-slate-800 sm:max-w-none sm:p-3 sm:text-sm'>
                  <code>public/cover-letter</code>
                </pre>
              </div>
            </div>
            <div className='mb-6 ml-4 md:ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>06</div>
              </div>
              <div className='pb-4'>
                <div className='mb-1 font-semibold text-slate-900'>Update Your Personal Data</div>
                <div className='text-sm text-slate-700 md:text-base'>
                  Open the <code>resume</code> and/or <code>cover-letter</code> files and replace
                  the placeholder content with your own information, including your work experience,
                  education, skills, and contact details.
                </div>
                <div className='mt-2 text-sm text-slate-700'>
                  Pay close attention to the formatting and structure of the templates to ensure
                  they are ATS-friendly.
                </div>
              </div>
            </div>
            <div className='mb-6 ml-4 md:ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>07</div>
              </div>
              <div className='pb-4'>
                <div className='mb-1 font-semibold text-slate-900'>
                  Locate API Endpoint Functions
                </div>
                <div className='text-sm text-slate-700 md:text-base'>
                  Find the API endpoint functions responsible for generating the resume and cover
                  letter. These are typically located in the <code>api</code> directory.
                </div>
                <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-slate-200 p-2 text-xs tracking-tighter text-slate-800 sm:max-w-none sm:p-3 sm:text-sm'>
                  <code>api/generate-resume</code>
                </pre>
                <pre className='mt-2 max-w-80 overflow-x-auto rounded-md bg-slate-200 p-2 text-xs tracking-tighter text-slate-800 sm:max-w-none sm:p-3 sm:text-sm'>
                  <code>api/generate-cover-letter</code>
                </pre>
              </div>
            </div>
            <div className='mb-6 ml-4 md:ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>08</div>
              </div>
              <div className='pb-4'>
                <div className='mb-1 font-semibold text-slate-900'>
                  Update the Header Keyword Function
                </div>
                <div className='text-sm text-slate-700 md:text-base'>
                  Within the API endpoint files, locate and update the <code>headerKeyword</code>{' '}
                  function (or similar) to include relevant keywords that align with the job
                  descriptions you are targeting. This helps your resume and cover letter get
                  noticed by ATS.
                </div>
                <div className='mt-2 text-sm text-slate-700'>
                  Refer to the comments or documentation within the code for specific instructions
                  on how to modify this function.
                </div>
              </div>
            </div>
            <div className='mb-6 ml-4 md:ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>09</div>
              </div>
              <div className='pb-4'>
                <div className='mb-1 font-semibold text-slate-900'>
                  Navigate to the Generate Page
                </div>
                <div className='text-sm text-slate-700 md:text-base'>
                  Once you have updated your data and the header keywords, navigate to the{' '}
                  <Link href='/generate'>Generate</Link> page of the application in your web
                  browser.
                </div>
              </div>
            </div>
            <div className='mb-6 ml-4 md:ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>10</div>
              </div>
              <div className='pb-4'>
                <div className='mb-1 font-semibold text-slate-900'>Preview Your Files</div>
                <div className='text-sm text-slate-700 md:text-base'>
                  On the Generate page, you should be able to see a rendered version of your resume
                  and cover letter. Carefully review both documents to ensure all your information
                  is displayed correctly and the formatting looks as expected.
                </div>
              </div>
            </div>
            <div className='mb-6 ml-4 md:ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>11</div>
              </div>
              <div className='pb-4'>
                <div className='mb-1 font-semibold text-slate-900'>Revise if Necessary</div>
                <div className='text-sm text-slate-700 md:text-base'>
                  If you notice any errors, missing information, or formatting issues during the
                  preview, go back to the <code>public/resume</code> and{' '}
                  <code>public/cover-letter</code> files and make the necessary revisions. Repeat
                  steps 7-10 until you are satisfied with the result.
                </div>
              </div>
            </div>
            <div className='ml-6'>
              <div className='absolute -left-3 flex size-6 items-center justify-center rounded-full bg-blue-200'>
                <div className='text-sm font-semibold text-blue-600'>12</div>
              </div>
              <div>
                <div className='mb-1 font-semibold text-slate-900'>Your Perfect Documents!</div>
                <div className='text-sm text-slate-700 md:text-base'>
                  Once you are completely satisfied with the preview of your resume and cover
                  letter, you can proceed to save or download them from the Generate page.
                  Congratulations, you now have ATS-friendly documents ready for your job
                  applications!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='border-t border-slate-200 pt-6 xl:mr-8'>
          <div className='flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between lg:gap-0'>
            <div className='font-semibold tracking-tighter text-slate-700'>
              Need tips? Visit <Link href='/tips'>Tips</Link> to perfect your resume!
            </div>
            <div className='font-semibold tracking-tighter text-slate-700'>
              Ready to preview? Go to <Link href='/generate'>Generate</Link> for your resume!
            </div>
          </div>
        </div>
      </section>

      {/* Right Column (for xl screens) */}
      <div className='flex flex-col gap-y-6 lg:col-span-2'>
        <section className='overflow-hidden bg-slate-100/70 lg:m-4 lg:rounded-lg lg:shadow-lg'>
          <div className='p-4 md:p-8 lg:p-6'>
            <div className='mb-4 text-2xl font-semibold text-slate-950'>Navigating Resbuilder</div>
            <div className='mb-2 text-slate-800'>
              You can navigate through the application using the navigation bar at the top of the
              page. Key sections include:
            </div>
            <div className='flex flex-col'>
              <div>
                <Link href='/' className='text-blue-500 hover:underline'>
                  Home
                </Link>{' '}
                - The main landing page providing an overview of Resbuilder.
              </div>
              <div>
                <Link href='/examples' className='text-blue-500 hover:underline'>
                  Examples
                </Link>{' '}
                - Showcases different ways resumes can be generated using various formats.
              </div>
              <div>
                <Link href='/tips' className='text-blue-500 hover:underline'>
                  Tips
                </Link>{' '}
                - Offers valuable advice and insights on crafting effective resumes and cover
                letters.
              </div>
              <div>
                <Link href='/docs' className='font-semibold text-blue-500'>
                  Docs
                </Link>{' '}
                - You are currently here! This page provides detailed information on using the
                application.
              </div>
            </div>
          </div>
        </section>

        <section className='overflow-hidden bg-slate-100/70 lg:m-4 lg:rounded-lg lg:shadow-lg'>
          <div className='p-4 md:p-8 lg:p-6'>
            <div className='mb-4 text-2xl font-semibold text-slate-950'>
              Understanding the Generation Methods
            </div>
            <div className='mb-1 text-lg font-medium text-slate-900'>Explore Different Formats</div>
            <div className='mb-2 text-slate-800'>
              Resbuilder showcases various methods for generating resumes and cover letters,
              demonstrating the flexibility of modern web development. You can explore examples
              rendered from different formats:
            </div>
            <div className='flex flex-col pb-1 pl-0.5 text-slate-700'>
              <Link href='/resume/api/client'>API route (client)</Link>
              <Link href='/resume/api/server'>API route (server)</Link>
              <Link href='/resume/json/local'>JSON file (local)</Link>
              <Link href='/resume/markdown/client'>Markdown file (client)</Link>
              <Link href='/resume/markdown/server'>Markdown file (server)</Link>
              <Link href='/resume/mdx/server'>MDX file (server)</Link>
              <Link href='/resume/mdx/static'> MDX file (static)</Link>
              <Link href='/resume/text/static'>Text file (static)</Link>
            </div>
            <div className='mb-4 text-slate-800'>
              These examples illustrate different data sources and rendering techniques. The core
              functionality will allow you to input your information through a user interface
              (coming soon!) to generate your documents.
            </div>

            <div className='mb-1 text-lg font-medium text-slate-900'>
              Previewing Your Documents as PDF
            </div>
            <div className='mb-3 text-slate-800'>
              Once your resume or cover letter is generated, you can preview it as a PDF to ensure
              it looks professional before you save or print. The PDF preview currently expects a
              pdfUrl parameter. This will be seamlessly integrated with the generation process in
              future updates.
            </div>
            <Link
              href='/pdf/preview'
              className='inline-flex items-center rounded-md bg-blue-100 px-3 py-2 text-sm font-medium text-blue-600 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none'
            >
              Go to PDF Preview
            </Link>
          </div>
        </section>

        <section className='overflow-hidden bg-slate-100/70 lg:m-4 lg:rounded-lg lg:shadow-lg'>
          <div className='p-4 md:p-8 lg:p-6'>
            <div className='mb-4 text-2xl font-semibold text-slate-900'>Future Enhancements</div>
            <div className='mb-2 text-slate-800'>
              Resbuilder is actively being developed. Here are some of the exciting features
              planned:
            </div>
            <div className='flex flex-col'>
              <div className='pl-0.5 text-slate-700'>
                - Intuitive user interface for direct resume and cover letter input.
              </div>
              <div className='pl-0.5 text-slate-700'>- Customizable resume templates.</div>
              <div className='pl-0.5 text-slate-700'>
                - Support for DOC and DOCX export formats.
              </div>
              <div className='pl-0.5 text-slate-700'>
                - Advanced ATS optimization tips integrated into the creation process.
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
