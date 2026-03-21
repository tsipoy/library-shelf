import { uniqueCategories } from '@/utils/lists'
import type { CategoriesProps } from 'types/books.types'

const Categories = ({ selectedCategory, onCategoryChange }: CategoriesProps) => {

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
