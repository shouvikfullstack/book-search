import React, { useState } from 'react';
import './App.css';
import search from './services/search'
import BookList from './components/BookList'
import Suggestions from './components/Suggestions'


function App() {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState([])
  const [suggestion, setSuggestion] = useState([])

  const getSearchResult = (query) => {
    setSelectedBook({ title: query })
    const K = 5;
    const result = search(query, K);
    setSuggestion(result)
    console.log(result);
  }

  const addBook = (index) => {
    setSelectedBook(suggestion[index])
    setSuggestion([])
  }

  const addBookToResult = () => {
    setBooks(books => books.concat(selectedBook))
    setSelectedBook([])
  }

  return (
    <div className="App">
      <div>
        <h1 style={{ padding: 20, margin: 'auto' }}>Search Books</h1>
        <input type="text" name="query" style={{ padding: 5, width: 300 }} value={selectedBook.title || ''} onChange={(e) => getSearchResult(e.target.value)} />
        <button onClick={() => addBookToResult()}>Submit</button>
        {suggestion.length > 0 &&  selectedBook.title.length > 0 && <Suggestions books={suggestion} addBook={addBook} />}
      </div>

      <div>
        {books.length == 0 && <p>No Books Selected</p>}
        <BookList books={books} />
      </div>
    </div>
  );
}

export default App;
