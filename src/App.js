import React, { useState } from "react"
import "./styles.css"

/**
 * Challenge:
 *
 * Create a function to calculate the number of separate words in the `text` state
 * For now, just console.log the word count when the button gets clicked to test it out.
 */

function App() {

    const [text, setText] = useState("")

    console.log(text); 

    function handleChange(event) {
        const { value } = event.target
        setText(value)
    }

    function countWords(text) {
        return text.trim().split(' ').filter(e => e !== '').length  
    }

    return (
        <div>
            <h1>How Fast Do You Type?</h1>
            <textarea value={text} onChange={handleChange}/>
            <h4>Time Remaining: X</h4>
            <button onClick={ () => console.log(countWords(text)) }>Start</button>
            <h1>Word Count: X</h1>
        </div>
    )
}

export default App 