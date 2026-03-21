import { useState, useEffect } from 'react'
import bookData from 'data/books.json'
import { STORAGE_KEY } from 'utils/lists'

export const useBookStorage = () => {
    const [updateBookList, setUpdateBookList] = useState(() => {
        const savedBooks = localStorage.getItem(STORAGE_KEY)
        return savedBooks ? JSON.parse(savedBooks) : bookData
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(updateBookList))
    }, [updateBookList])

    return { updateBookList, setUpdateBookList }
}
