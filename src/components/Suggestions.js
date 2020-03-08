import React from 'react'

const Suggestions = (props) => {
  return (
    <div style={{ width: 400, margin: 'auto' }}>
      <div style={{ position: "absolute", width: 310,  marginLeft: 14, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
        <ul style={{ listStyleType: 'none', textAlign: 'left', paddingLeft: 15, marginTop: 5 }}>
          {props.books.map((book, index) => <li key={index} onClick={() => props.addBook(index)} style={{ backgroundColor: '#fff', width: '100%', padding: 5 }}>{book.title}</li>)}
        </ul>
      </div>
    </div>
  )
}

export default Suggestions;