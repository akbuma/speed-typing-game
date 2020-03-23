import React, { useState, useEffect, useRef } from "react"
import "./styles.css"

/**
 * Challenge:
 *
 * Make the input box focus (DOM elements have a method called .focus())
 * immediately when the game starts
 */

function App() {

    const START_TIME = 10

    const [text, setText] = useState("")
    const [timeRemaining, setTimeRemaining] = useState(START_TIME)
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    const [wordCount, setWordCount] = useState(0)

    const textBoxRef = useRef(null);

    useEffect(() => {
        if(timeRemaining > 0 && isTimeRunning) {
            setTimeout(() => {
                setTimeRemaining(time => time - 1)
            }, 1000)
        } else {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

    function handleChange(event) {
        const { value } = event.target
        setText(value)
    }

    function countWords(text) {
        return text.trim().split(' ').filter(e => e !== '').length  
    }

    function startGame() {
        setText("")
        setIsTimeRunning(true)
        setTimeRemaining(START_TIME)
        textBoxRef.current.disabled = false; //Bug fix, see part 7. Currently disabled at the time of async call
        textBoxRef.current.focus()
    }

    function endGame() {
        setIsTimeRunning(false)
        setWordCount(countWords(text))
    }

    return (
        <div>
            <h1>How Fast Do You Type?</h1>
            <textarea ref={textBoxRef} value={text} onChange={handleChange} disabled={!isTimeRunning}/>
            <h4>Time Remaining: {timeRemaining}</h4>
            <button onClick={() => startGame()} disabled={isTimeRunning}>Start</button>
            <h1>Word Count: {wordCount}</h1>
        </div>
    )
}

export default App 