import React from 'react'

const Suggestions = (props) => {
  return (
    <div style={{width: 400, margin: 'auto', position: "absolute"}}>
      <ul style={{}}>
        {props.books.map((book, index) => <li key={index} onClick={() => props.addBook(index)}>{book.title}</li>)}
      </ul>
    </div>
  )
}

export default Suggestions;