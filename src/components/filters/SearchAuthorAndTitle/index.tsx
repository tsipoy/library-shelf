interface SearchAuthorAndTitleProps {
    searchTerm: string
    onSearchChange: (term: string) => void
}

const SearchAuthorAndTitle = ({ searchTerm, onSearchChange }: SearchAuthorAndTitleProps) => {
    return (
        <div>
            <label htmlFor="search" className="block text-left font-medium text-gray-800 mb-1">
                Search by Author or Title
            </label>
            <input
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                type="text"
                id="search"
                name="search"
                placeholder="Type author or title..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-colors"
            />
        </div>
    )
}

export default SearchAuthorAndTitle