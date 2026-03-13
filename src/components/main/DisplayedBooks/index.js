import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import bookData from 'data/books.json';
import { getImageUrl } from 'utils/utilities';
const DisplayedBooks = () => {
    const books = bookData.books.map((book) => {
        const imageUrl = getImageUrl(book.cover);
        return (_jsxs("div", { className: "w-64 rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl hover:translate-y-[-4px] transition-all duration-300 h-full flex flex-col", children: [_jsx("div", { className: "relative w-full overflow-hidden bg-gray-100", style: { aspectRatio: '2/3' }, children: imageUrl && (_jsx("img", { src: imageUrl, alt: book.title, className: "w-full h-full object-cover block", width: 200, height: 300 })) }), _jsxs("div", { className: "p-4 flex flex-col gap-2 flex-grow", children: [_jsx("h3", { className: "m-0 text-base font-semibold text-amber-900 line-clamp-2", children: book.title }), _jsx("p", { className: "m-0 text-sm text-gray-600 font-medium", children: book.author }), _jsxs("div", { className: "flex items-center justify-between gap-2 mt-auto", children: [_jsx("span", { className: "inline-block text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit font-medium", children: book.category }), book.borrowed && (_jsx("div", { className: "bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider", children: "Borrowed" }))] })] })] }, book.id));
    });
    return (_jsx("div", { className: "flex flex-wrap gap-12 py-5 justify-between", children: books }));
};
export default DisplayedBooks;
