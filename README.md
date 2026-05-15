# Resbuilder | ATS Friendly

[![resumebuilder](https://github.com/user-attachments/assets/22440a66-6de4-48a9-b504-504a23b3bddd)](https://ats-resbuilder.vercel.app)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![GitHub repo size](https://img.shields.io/github/repo-size/egarrisxn/resume-builder)](https://github.com/egarrisxn/resume-builder)
[![GitHub last commit](https://img.shields.io/github/last-commit/egarrisxn/resume-builder)](https://github.com/egarrisxn/resume-builder)

## Overview

**Resbuilder | ATS Friendly** is a user-friendly web application designed to empower you in creating Applicant Tracking System (ATS) friendly resumes and cover letters. This project showcases innovative methods for generating and saving these crucial documents in various formats, including **Markdown (.md), MDX (.mdx), plain text (.txt), and JSON (.json)**. Furthermore, you can seamlessly **preview and print your resume as a PDF**, ensuring it looks professional before you submit it. Built with modern web technologies, Resbuilder offers a smooth and efficient experience to help you land your dream job.

## Key Features

- **Versatile Resume & Cover Letter Formats:** Generate and save your documents in Markdown, MDX, plain text, and JSON formats, providing flexibility for different platforms and workflows.
- **Effortless PDF Generation:** Instantly preview and download your resume or cover letter as a polished PDF document, ready for sharing and applications.
- **Real-time Preview:** Visualize your resume or cover letter before downloading, guaranteeing that all elements are perfectly aligned and formatted.
- **Customizable Templates (Future Enhancement):** While currently offering a clean and effective default style, future updates will introduce customizable templates to cater to diverse personal branding needs.
- **ATS Optimization:** Designed with Applicant Tracking Systems in mind, ensuring your resume's content is easily parsed and understood by recruitment software.

## Technologies Used

This project leverages the following cutting-edge technologies:

- **Framework:** [Next.js](https://nextjs.org/) - The React framework for production.
- **UI Library:** [React](https://react.dev/) - A JavaScript library for building user interfaces.
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapid styling.
- **Core Language:** [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - The dynamic language of the web.
- **Content Formats:** [Markdown](https://www.markdownguide.org/) & [MDX](https://mdxjs.com/) - Powerful ways to write content with React components.
- **Linting & Formatting:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) - Ensuring code quality and consistency.
- **PDF Generation Library:** [pdf-lib](https://pdf-lib.js.org/) - A JavaScript library to create and modify PDF documents.
- **Content Parsing:** [remark](https://remark.js.org/) & [remark-html](https://github.com/remarkjs/remark-html) - Markdown processor and HTML converter.
- **Remote MDX:** [next-mdx-remote](https://github.com/hashicorp/next-mdx-remote) - Render MDX from external sources.

## Getting Started - Run Locally

Ready to try Resbuilder on your local machine? Follow these simple steps:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/egarrisxn/resume-builder.git](https://github.com/egarrisxn/resume-builder.git)
    cd resume-builder
    ```
2.  **Install Dependencies:**
    ```bash
    pnpm install
    ```
3.  **Start the Development Server:**
    ```bash
    pnpm dev
    ```
4.  **Open in Your Browser:** Navigate to `http://localhost:3000` in your web browser to start building!

## Help Navigating the Application

This section explains the different resume components and how they interact with data sources. Each component is responsible for fetching and rendering resume data in various formats.

| **Name**               | **Data Source**                          | **Parse/Fetch Location** | **Render Type**       | **Notes**                                  |
| :--------------------- | :--------------------------------------- | :----------------------- | :-------------------- | :----------------------------------------- |
| `APIClientResume`      | API endpoint (`/api/resume-data`)        | Client                   | Dynamic client render | Uses fetch on the client after load.       |
| `APIServerResume`      | API endpoint (`/api/resume-data`)        | Server                   | Dynamic server render | Fetched server-side, hydrated client-side. |
| `JSONLocalResume`      | Static JSON file (`/public/resume.json`) | Client                   | Dynamic client render | Fetches local public file client-side.     |
| `MarkdownClientResume` | Static Markdown (`/public/resume.md`)    | Client                   | Dynamic client render | Fetch + `remark` on the client.            |
| `MarkdownServerResume` | Markdown file (`/app/data/resume.md`)    | Server                   | Dynamic server render | Read file + `remark` server-side.          |
| `MDXServerResume`      | MDX file (`/app/data/resume.mdx`)        | Server                   | Dynamic server render | Read + compile MDX server-side.            |
| `MDXStaticResume`      | Hardcoded MDX string (in code)           | Server                   | Static server render  | Static JSX output via `next-mdx-remote`.   |
| `TextStaticResume`     | Hardcoded text content (in code)         | Server                   | Static server render  | No MD/MDX parsing, just JSX sections.      |

### How This Helps

Understanding these components allows you to easily find and work with the data sources, whether you need to fetch content dynamically or display static content. Each render type ensures that content is displayed as expected while balancing performance with flexibility.

## Deployment

Resbuilder is proudly hosted on [Vercel](https://vercel.com/), providing a streamlined and efficient deployment process optimized for Next.js applications. You can access the live application at [https://ats-resbuilder.vercel.app](https://ats-resbuilder.vercel.app).

[![Vercel](https://vercel.com/button)](https://ats-resbuilder.vercel.app)

## Contributing

We warmly welcome contributions to make Resbuilder even better! If you have ideas for improvements, new features, or have identified any issues, please don't hesitate to:

- **Submit Issues:** Report bugs or suggest enhancements by opening a new issue on our [GitHub repository](https://github.com/egarrisxn/resume-builder/issues).
- **Submit Pull Requests:** If you've implemented a fix or a new feature, feel free to submit a pull request with a clear description of your changes.

## Feedback

Your feedback is invaluable in shaping the future of Resbuilder. If you have any suggestions, feature requests, or encounter any problems while using the application, please open an issue on [GitHub](https://github.com/egarrisxn/resume-builder/issues).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute it according to the terms of this open-source license.

## Contact

If you have any questions, comments, or concerns, please don't hesitate to reach out through the following channels:

- **GitHub:** [https://github.com/EGARRISXN](https://github.com/egarrisxn)
- **Email:** egarrisxn@gmail.com
  .

x
