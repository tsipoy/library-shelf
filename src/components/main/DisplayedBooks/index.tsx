import bookData from 'data/books.json'
import type { Book } from 'types/books.types'
import { getImageUrl } from 'utils/utilities'

interface DisplayedBooksProps {
    selectedCategory?: string | null
    searchTerm?: string
}

const DisplayedBooks = ({ selectedCategory, searchTerm = '' }: DisplayedBooksProps) => {
    const allBooks = (bookData as { books: Book[] }).books
    const filteredBooks = allBooks.filter((book) => {
        const matchesCategory = !selectedCategory || book.category === selectedCategory
        const matchesSearch = searchTerm === '' ||
            book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            book.author.toLowerCase().includes(searchTerm.toLowerCase())
        return matchesCategory && matchesSearch
    })

    const books = filteredBooks.map((book) => {
        const imageUrl = getImageUrl(book.cover)
        return (
            <div
                key={book.id}
                className="w-64 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 h-full flex flex-col"
            >
                <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: '2/3' }}>
                    {imageUrl && (
                        <img
                            src={imageUrl}
                            alt={book.title}
                            className="w-full h-full object-cover block"
                            width={200}
                            height={300}
                        />
                    )}
                </div>
                <div className="p-4 flex flex-col gap-2 flex-grow">
                    <h3 className="m-0 text-base font-semibold text-amber-900 line-clamp-2">
                        {book.title}
                    </h3>
                    <p className="m-0 text-sm text-gray-600 font-medium">
                        {book.author}
                    </p>
                    <div className="flex items-center justify-between gap-2 mt-auto">
                        <span className="inline-block text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit font-medium">
                            {book.category}
                        </span>
                        {book.borrowed && (
                            <div className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                                Borrowed
                            </div>
                        )}

                    </div>
                </div>
            </div>
        )
    })
    return (
        <div className="bg-white rounded-lg shadow-sm p-6">
            {filteredBooks.length === 0 ? (
                <p className="text-center text-gray-500 py-12">No books found matching your criteria.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {books}
                </div>
            )}
        </div>
    )
}

export default DisplayedBooks