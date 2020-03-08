import React from 'react'

const Suggestions = (props) => {
  return (
    <div>
      <ul>
        {props.books.map(book => <li>{book.title}</li>)}
      </ul>
    </div>
  )
}

export default Suggestions;