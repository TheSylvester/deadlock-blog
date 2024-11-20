# Deadlock Blog

A modern, performant blog platform built with Next.js 14, React 18, and TailwindCSS.

## Features

- Modern UI with shadcn/ui components
- Server-side rendering with Next.js 14
- TypeScript support for enhanced type safety
- Responsive design
- Optimized font loading with next/font
- ESLint configuration for code quality
- Integration with Strapi-based content management system

## Tech Stack

- **Framework**: Next.js 14.2.15
- **Language**: TypeScript 5
- **Styling**: 
  - TailwindCSS 3.4
  - Class Variance Authority 0.7
  - Tailwind Merge
- **UI Components**: 
  - shadcn/ui (built on Radix UI primitives)
  - Lucide React Icons
- **Content Management**: Strapi (via deadlock-content-server)
- **Development Tools**:
  - ESLint 8
  - PostCSS 8
  - Node.js TypeScript types

## Prerequisites

- Node.js (Latest LTS version recommended)
- npm 6.0.0 or higher

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Ensure the content server is running (see deadlock-content-server README)

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
deadlock-blog/
├── app/               # Next.js app directory
├── components/        # Reusable UI components
├── lib/              # Utility functions and shared logic
└── styles/           # Global styles and Tailwind configuration
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## System Architecture

This blog is part of a larger system:
- Frontend: This Next.js application (deadlock-blog)
- Backend: Strapi CMS (deadlock-content-server)
- Database: SQLite (managed by Strapi)

The blog fetches content from the Strapi backend running at `http://localhost:3001` by default.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License.
