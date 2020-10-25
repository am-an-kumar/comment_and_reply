import React from 'react'

function App() {
    function handleSubmit(event) {
        event.preventDefault()
        console.log('Form submitted')
    }

    return (
        <>
            <h1>Comments and Replies</h1>
            <form>
                <p>Comment</p>
                <input type="text" name="name" />
                <textarea name="comment" />
                <button type="submit" onClick={handleSubmit}>
                    Post
                </button>
            </form>
        </>
    )
}

export default App
