import type { Book, DisplayedBooksProps } from 'types/books.types'
import { getImageUrl } from 'utils/utilities'
import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react'
import { useBookStorage } from '@/hook/useBookStorage'
import { useAddNewBooks } from '@/hook/useAddNewBooks'
import { useFilteredBooks } from '@/hook/useFilteredBooks'

const DisplayedBooks = ({ selectedCategory, searchTerm = '' }: DisplayedBooksProps) => {
    const { updateBookList, setUpdateBookList } = useBookStorage()
    const { isFormOpen, setIsFormOpen, inputValue, handleInputChange, resetForm } = useAddNewBooks()

    const allBooks = (updateBookList as { books: Book[] }).books
    const filteredBooks = useFilteredBooks({
        books: allBooks,
        selectedCategory,
        searchTerm
    })

    const books = filteredBooks.map((book: { cover: string; id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; author: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; category: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; borrowed: any }) => {
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
                            alt={String(book.title) || 'Book cover'}
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
        <div className="space-y-6">
            <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-6">
                <h1 className="text-3xl font-bold text-amber-900">My Books</h1>
                {!isFormOpen && (
                    <button
                        onClick={() => setIsFormOpen(!isFormOpen)}
                        className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors shadow-md"
                    >
                        + Add New Book
                    </button>
                )}
            </div>

            {isFormOpen && (
                <>
                    <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsFormOpen(false)}></div>
                    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white rounded-lg shadow-2xl p-6 z-50 animate-in fade-in zoom-in-95 duration-200">
                        <h2 className="text-2xl font-bold text-amber-900 mb-6">Add New Book</h2>
                        <div className="space-y-4 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 text-start">Title</label>
                                <input type="text" name="title" placeholder="Enter book title" value={inputValue.title} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 text-start">Author</label>
                                <input type="text" name="author" placeholder="Enter author name" value={inputValue.author} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 text-start">Category</label>
                                <input type="text" name="category" placeholder="e.g., Fiction" value={inputValue.category} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2 text-start">Cover URL</label>
                                <input type="text" name="cover" placeholder="https://example.com/cover.jpg" value={inputValue.cover} onChange={handleInputChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition" />
                            </div>
                        </div>
                        <div className="flex gap-3 justify-end">
                            <button onClick={() => setIsFormOpen(false)} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors">
                                Cancel
                            </button>
                            <button onClick={() => {
                                setUpdateBookList({ books: [...updateBookList.books, { ...inputValue, id: Date.now().toString() }] });
                                resetForm();
                                setIsFormOpen(false);
                            }} className="bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                                Add Book
                            </button>
                        </div>
                    </div>
                </>
            )}

            <div className="bg-white rounded-lg shadow-sm p-6">
                {filteredBooks.length === 0 ? (
                    <p className="text-center text-gray-500 py-12">No books found matching your criteria.</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {books}
                    </div>
                )}
            </div>
        </div>
    )
}

export default DisplayedBooks