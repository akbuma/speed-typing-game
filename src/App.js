import React, { useState } from "react"
import "./styles.css"

/**
 * Challenge: Using hooks, track the state of the text in the textarea on every keystroke
 * To verify it's working, you could just console.log the state on every change
 *
 * https://scrimba.com/p/p7P5Hd/cW8Jdfy
 */

function App() {

    const [text, setText] = useState("")
    console.log(text); 

    function handleChange(event) {
        const { value } = event.target
        setText(value)
    }

    return (
        <div>
            <h1>How Fast Do You Type?</h1>
            <textarea value={text} onChange={handleChange}/>
            <h4>Time Remaining: X</h4>
            <button>Start</button>
            <h1>Word Count: X</h1>
        </div>
    )
}

export default App 