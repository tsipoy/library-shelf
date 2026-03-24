import './App.css'
import BookShelf from 'view/BookShelf'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 border-b border-gray-200">
          <h1 className='text-5xl font-bold text-center text-gray-800'>Library Shelf</h1>
        </div>
        <div className="py-8">
          <BookShelf />
        </div>
      </div>
    </div>
  )
}

export default App
