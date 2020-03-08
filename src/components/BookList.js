import React from 'react'

const BookList = (props) => {
  return (
    <div>
      {props.books.map(book => <div>{book.title}</div>)}
    </div>
  )
}

export default BookList;