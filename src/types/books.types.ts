export interface Book {
    id: string
    title: string
    author: string
    category: string
    cover: string
    borrowed: boolean
}

export interface CategoriesProps {
    selectedCategory: string | null
    onCategoryChange: (category: string | null) => void
}

export interface DisplayedBooksProps {
    selectedCategory?: string | null
    searchTerm?: string
}

export interface UseFilteredBooksProps {
    books: Book[]
    selectedCategory?: string | null
    searchTerm?: string
}

export interface SearchAuthorAndTitleProps {
    searchTerm: string
    onSearchChange: (term: string) => void
}



