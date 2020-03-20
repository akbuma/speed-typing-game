import React, { useState, useEffect } from "react"
import "./styles.css"

/**
 * Challenge:
 *
 * Make it so clicking the Start button starts the timer instead of it starting on refresh
 * (Hint: use a new state variable to indicate if the game should be running or not)
 */

function App() {

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(10)
    const [isTimeRunning, setIsTimeRunning] = useState(false)

    console.log(text); 

    useEffect(() => {
        if(timeRemaining > 0 && isTimeRunning) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else {
            setIsTimeRunning(false)
        }
    }, [timeRemaining, isTimeRunning])

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
            <h4>Time Remaining: {timeRemaining}</h4>
            <button onClick={ () => setIsTimeRunning(true) }>Start</button>
            <h1>Word Count: X</h1>
        </div>
    )
}

export default App 