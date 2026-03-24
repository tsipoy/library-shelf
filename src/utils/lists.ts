import bookData from 'data/books.json'
import type { Book } from 'types/books.types'

export const imageModules = import.meta.glob<string>(
    '../assets/*.{jpg,jpeg,png,gif,svg}',
    { eager: true, import: 'default' }
);

export const STORAGE_KEY = 'library_shelf_books';

export const allBooks = (bookData as { books: Book[] }).books;

export const uniqueCategories = Array.from(new Set(allBooks.map((book) => book.category))).sort();
