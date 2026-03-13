import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import BookShelf from 'view/BookShelf';
function App() {
    return (_jsxs(_Fragment, { children: [_jsx("h1", { className: 'start text-5xl font-bold text-left pb-12 pt-4 text-gray-800', children: "Library Shelf" }), _jsx(BookShelf, {})] }));
}
export default App;
