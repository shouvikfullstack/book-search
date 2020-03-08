import React from 'react'

const BookList = (props) => {
  return (
    <div className="books">
      {props.books.map((book, index) => <div key={index}>{book.title}</div>)}
    </div>
  )
}

export default BookList;