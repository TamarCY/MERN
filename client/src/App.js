import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import ShowBookList from "./components/ShowBookList"
import CreateBook from "./components/CreatBook"
import UpdateBookInfo from "./components/UpdateBookInfo"
import ShowBookDetails from "./components/ShowBookDetails"
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowBookList/>} />
        <Route path="/create-book" element={<CreateBook/>} />
        <Route path="/edit-book/:id" element={<UpdateBookInfo/>} />
        <Route path="/show-book/:id" element={<ShowBookDetails/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
