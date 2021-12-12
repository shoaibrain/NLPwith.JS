import './App.css'
import { useState } from 'react'

function App() {
  //declare input state
  const [input, setInput] = useState('')
  const handleChange = (e) => {
    //get value from the input box
    setInput(e.target.value)
    //parse input
    //analyze the input in real time
    //update the state of various metrics in real time
    //if user pauses for more than 3 seconds, improve result with better model
    console.log(input)
  }
  return (
    <div>
      <form onChange={handleChange}>
        <input
          type='text'
          className='textInput'
          name='inpt'
          placeholder='type here'
        />
      </form>
    </div>
  )
}
export default App
