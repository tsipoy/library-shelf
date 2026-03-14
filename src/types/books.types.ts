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


