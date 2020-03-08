import React, { useState } from 'react';
import './App.css';
import search from './services/search'
import BookList from './components/BookList'
import Suggestions from './components/Suggestions'


function App() {
  const [books, setBooks ] = useState([])
  const [selectedBook, setSelectedBook ] = useState([])
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

  const addBookToResult = () => {
    setBooks(books => books.concat(selectedBook))
    setSelectedBook([])
  }

  return (
    <div className="App">
      <div>
        <h1 style={{padding: 20, margin: 'auto'}}>Search Books</h1>
        <input type="text" name="query" value={selectedBook.title || ''} onChange={(e)=> getSearchResult(e.target.value)} style={{width: 300}}/>
        <button onClick={() => addBookToResult()}>Submit</button>
        <Suggestions books={suggestion} addBook={addBook}/>
      </div>
      
      <div>
      {books.length == 0 && <p>No Books Selected</p>}
         <BookList books={books}/>
      </div>
    </div>
  );
}

export default App;
