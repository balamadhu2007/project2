import React from 'react'
import book from './book.txt'
const App = () => {
  console.log(book)
  return (
    <div>
      {
      fetch(book).then(result => result.txt()).then(text=>{

          <h1>{text}</h1>  

       })

      } 

      
      


    </div>
  )
}

export default App
