import { useState } from 'react'
import DisplayedBooks from "components/main/DisplayedBooks"
import Categories from "components/filters/Categories"
import SearchAuthorAndTitle from "components/filters/SearchAuthorAndTitle"

const BookShelf = () => {
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
    const [searchTerm, setSearchTerm] = useState<string>('')

    return (
        <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <SearchAuthorAndTitle searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-lg text-left font-semibold text-gray-800 mb-4">Filter by Category</h2>
                <Categories selectedCategory={selectedCategory} onCategoryChange={setSelectedCategory} />
            </div>
            <DisplayedBooks selectedCategory={selectedCategory} searchTerm={searchTerm} />
        </div>
    )
}

export default BookShelf