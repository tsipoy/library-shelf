import bookData from 'data/books.json'
import type { Book, CategoriesProps } from 'types/books.types'

const Categories = ({ selectedCategory, onCategoryChange }: CategoriesProps) => {
    const allBooks = (bookData as { books: Book[] }).books;
    const uniqueCategories = Array.from(new Set(allBooks.map((book) => book.category))).sort();

    return (
        <div className="flex flex-wrap gap-3 mb-8">
            <button
                onClick={() => onCategoryChange(null)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === null
                    ? 'bg-amber-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                    }`}
            >
                All Books
            </button>
            {uniqueCategories.map((category) => (
                <button
                    key={category}
                    onClick={() => onCategoryChange(category)}
                    className={`px-4 py-2 rounded-lg font-medium transition-colors ${selectedCategory === category
                        ? 'bg-amber-600 text-white'
                        : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                        }`}
                >
                    {category}
                </button>
            ))}
        </div>
    )
}
export default Categories
