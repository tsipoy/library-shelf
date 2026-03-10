# Library Shelf

A React-based application that displays a collection of books with their details including title, author, category, and availability status. The app features a responsive, card-based layout showcasing books with cover images.

## Project Overview

Library Shelf is designed to manage and display a personal or organizational book collection. Each book display includes:
- **Cover Image**: Visual representation of the book
- **Title & Author**: Book information
- **Category**: Classification (e.g., Programming, Self Development, Psychology)
- **Borrowed Status**: Indicator showing if a book is currently borrowed

## Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server with HMR
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Code linting
- **PostCSS & Autoprefixer** - CSS processing

## Getting Started

### Prerequisites

- Node.js (v20.19 or higher, or v22.12 or higher)

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
npm run dev
```

Starts the development server at `http://localhost:5173` with Hot Module Replacement (HMR) enabled.

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist/` folder. TypeScript checks are performed before building.

### Preview

```bash
npm run preview
```

Serves the production build locally for testing before deployment.

### Linting

```bash
npm run lint
```

Runs ESLint to check code quality and catch potential issues.

## Adding Books

To add new books to the library:

1. Add a book entry to [src/data/books.json](src/data/books.json)
2. Place the cover image in [src/assets/](src/assets/) with the matching filename
3. The book will automatically appear in the shelf after refresh

## Contributing

When making changes:
- Ensure TypeScript compilation passes: `npm run build`
- Test locally: `npm run dev`
