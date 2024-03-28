import React, { useState } from "react";

const MessageInput = ( { onSendMessage }) => { 
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage(message);
        setMessage('');
    }

    return (
        <form className="message-input" onSubmit={handleSubmit}>
            <input type="text" 
            value = {message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Type your message here ..." />
            <button type="button">Submit</button>
        </form>
    );
};

export default MessageInput;