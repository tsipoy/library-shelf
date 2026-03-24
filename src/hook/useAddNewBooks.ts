import { useState } from 'react'
import type { Book } from 'types/books.types'

interface InputValue extends Omit<Book, 'id'> {
    id: string
}

export const useAddNewBooks = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)
    const [inputValue, setInputValue] = useState<InputValue>({
        id: '',
        title: '',
        author: '',
        category: '',
        cover: '',
        borrowed: false
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setInputValue((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const resetForm = () => {
        setInputValue({
            id: '',
            title: '',
            author: '',
            category: '',
            cover: '',
            borrowed: false
        })
    }

    return {
        isFormOpen,
        setIsFormOpen,
        inputValue,
        setInputValue,
        handleInputChange,
        resetForm
    }
}
