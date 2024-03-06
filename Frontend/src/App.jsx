import { Routes, Route } from "react-router-dom";

import CreateBook from "./Pages/create_book";
import DeleteBook from "./Pages/delete_book";
import EditBook from "./Pages/edit_book";
import ShowBook from "./Pages/show_book";
import Home from "./Pages/home";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books/create" element={<CreateBook />} />
      <Route path="/books/details/:id" element={<ShowBook />} />
      <Route path="/books/edit/:id" element={<EditBook />} />
      <Route path="/books/delete/:id" element={<DeleteBook />} />
    </Routes>
  )
}

export default App
