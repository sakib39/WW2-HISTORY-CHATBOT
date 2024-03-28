import React from "react";
import Message from "./Message";

const messages = [
    {id: 1, text:"Hello, How can I help you?", sender: "bot"},
    {id: 2, text:"Ask me anything", sender: "bot"},
];

const MessageList = () => {
    return(
        <div>
            {messages.map((msg) => ( 
                <Message key={msg.id} text={msg.text} sender={msg.sender} />
            ))}
        </div>
    );
};

export default MessageList;