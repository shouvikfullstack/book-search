import React from 'react';
import './App.css';
import search from './services/search'

function App() {
  const getSearchResult = (query, K) => {
    const result = search(query, K);
    console.log(result);
  }
  return (
    <div className="App">
      <button onClick={() => getSearchResult('will', 3)}>try</button>
    </div>
  );
}

export default App;
