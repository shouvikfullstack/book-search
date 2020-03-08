import React from 'react'
import './styles/suggestions.css'

const Suggestions = (props) => {
  return (
    <div style={{ width: 400, margin: 'auto' }}>
      <div style={{ position: "absolute", width: 310, marginLeft: 14, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <ul style={{ listStyleType: 'none', textAlign: 'left', marginTop: 5, padding: 0 }}>
          {props.books.map((book, index) =>
            <li
              key={index}
              onClick={() => props.addBook(index)}
              style={{ width: '95%'}}
              className="listItem"
            >{book.title}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Suggestions;