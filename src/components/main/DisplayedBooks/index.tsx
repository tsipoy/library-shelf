import bookData from '../../../data/books.json'

const DisplayedBooks = () => {
    const getImageUrl = (imageName: string) => {
        return new URL(`../../../assets/${imageName}`, import.meta.url).href
    }

    const books = bookData.books.map((book) => {
        return (
            <div
                key={book.id}
                className="w-64 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 h-full flex flex-col"
            >
                <div className="relative w-full overflow-hidden bg-gray-100" style={{ aspectRatio: '2/3' }}>
                    <img
                        src={getImageUrl(book.cover)}
                        alt={book.title}
                        className="w-full h-full object-cover block"
                        width={200}
                        height={300}
                    />
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
        <div className="flex flex-wrap gap-12 py-5 justify-between">
            {books}
        </div>
    )
}

export default DisplayedBooks