import { useMemo } from 'react'
import type { UseFilteredBooksProps } from 'types/books.types'


export const useFilteredBooks = ({
    books,
    selectedCategory,
    searchTerm = ''
}: UseFilteredBooksProps) => {
    return useMemo(() => {
        return books.filter((book) => {
            const matchesCategory =
                !selectedCategory || book.category === selectedCategory
            const matchesSearch =
                searchTerm === '' ||
                book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                book.author.toLowerCase().includes(searchTerm.toLowerCase())
            return matchesCategory && matchesSearch
        })
    }, [books, selectedCategory, searchTerm])
}
