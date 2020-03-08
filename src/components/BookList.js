import React from 'react'

const BookList = (props) => {
  return (
    <div className="books">
      {props.books.map((book, index) => <div key={index} style={{width: '30%', float: 'left', padding: 10, margin: 10, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
        <h3>{book.title}</h3>
        <p>{book.summary.summary.substring(1,230) + '...'}</p>
        <hr />
        <p>{book.author.author}</p></div>)}
    </div>
  )
}

export default BookList;