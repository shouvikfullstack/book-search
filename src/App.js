import React, { useState } from 'react';
import './App.css';
import search from './services/search'
import BookList from './components/BookList'


function App() {
  const [books, setBooks ] = useState([])

  const getSearchResult = (query) => {
    const K = 3;
    const result = search(query, K);
    console.log(result);
  }

  const addBook = () => {
    console.log(books)
  }
  return (
    <div className="App">
      <div>
        <input type="text" name="query" onChange={(e)=> getSearchResult(e.target.value)}/>
        <button onClick={() => addBook}>Search</button>
      </div>
      <div>
        {books.length > 0 && <BookList />}
      </div>
    </div>
  );
}

export default App;
