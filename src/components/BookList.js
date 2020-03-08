import React from 'react'

const BookList = (props) => {
  return (
    <div className="books">
      {props.books.map((book, index) => <div key={index} style={{width: '33%', float: 'left'}}>
        <h3>{book.title}</h3>
        <p>{book.summary.summary.substring(1,30) + '...'}</p>
        <hr />
        <p>{book.author.author}</p><hr /></div>)}
    </div>
  )
}

export default BookList;