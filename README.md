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

## Project Structure

```
src/
├── components/
│   └── main/
│       └── DisplayedBooks/     # Book card grid component
├── data/
│   └── books.json              # Book collection data
├── assets/                      # Book cover images
├── App.tsx                      # Main app component
├── main.tsx                     # Entry point
└── index.css                    # Global styles
```

### Data Format

Books are stored in [src/data/books.json](src/data/books.json) with the following structure:

```json
{
  "books": [
    {
      "id": "1",
      "title": "Book Title",
      "author": "Author Name",
      "category": "Category Name",
      "cover": "image-filename.jpg",
      "borrowed": false
    }
  ]
}
```

### Assets

Book cover images should be placed in the [src/assets/](src/assets/) folder and referenced by filename in the books.json data file.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)

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
- Ensure TypeScript compilation passes: `npm run build:types`
- Run the linter: `npm run lint`
- Test locally: `npm run dev`
