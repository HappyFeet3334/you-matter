import React, { useState } from 'react';
import './App.css'; // Import the CSS file

const MessageButton = () => {
    // Define state to manage the current message
    const [currentMessage, setCurrentMessage] = useState('');

    // List of messages
    const messages = [
        "You are awesome!",
        "You are loved!",
        "You are amazing!",
        "You are beautiful!",
        "you belong!",
        "You are important!",
        "You are unique!",
        "You are strong!",
    ];

    // Function to handle button click
    const handleClick = () => {
        // Get a random message from the list
        const randomIndex = Math.floor(Math.random() * messages.length);
        const randomMessage = messages[randomIndex];
        // Update the current message state
        setCurrentMessage(randomMessage);
    };

    return (
        <div>
            {/* Button to trigger message display */}
            <button onClick={handleClick}>Show Message</button>
            {/* Display the current message */}
            {currentMessage && <p>{currentMessage}</p>}
        </div>
    );
};

const App = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>Random Message Button</h1>
                <MessageButton />
            </div>
        </div>
    );
};

export default App;
