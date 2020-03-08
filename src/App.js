import React, { useState } from 'react';
import './App.css';
import search from './services/search'
import BookList from './components/BookList'
import Suggestions from './components/Suggestions'


function App() {
  const [books, setBooks ] = useState([])
  const [selecteBook, setSelectedBook ] = useState('')
  const [suggestion, setSuggestion] = useState([])

  const getSearchResult = (query) => {
    console.log(query)
    const K = 3;
    const result = search(query, K);
    setSuggestion(result)
    console.log(result);
  }

  const addBook = (index) => {
    setSelectedBook(suggestion[index])
  }
  return (
    <div className="App">
      <div>
        <input type="text" name="query" value={selecteBook.title} onChange={(e)=> getSearchResult(e.target.value)} style={{width: 300}}/>
        <button onClick={() => addBook}>Search</button>
      </div>
      <Suggestions books={suggestion} addBook={addBook}/>
      <div>
        {books.length > 0 && <BookList books={books}/>}
      </div>
    </div>
  );
}

export default App;
