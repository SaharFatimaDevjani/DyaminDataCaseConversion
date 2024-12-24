import React from 'react';
import { useState } from 'react';

const Data = () => {
    const [input, setInput] = useState("");
    const [output, setOutput] = useState("");

    const handleData = (event) => {
        event.preventDefault();
        setInput(event.target.value);
    };

    const toUppercase = () => {
        setOutput(input.toUpperCase());
    };

    const toLowercase = () => {
        setOutput(input.toLowerCase());
    };

    const reset = () => {
        setInput("");
        setOutput("");
    };

    const toCapitalize = () => {
        setOutput(input.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" "));
    };

    return (
        <div className="container">
            <div className="box">
                <textarea 
                    onChange={handleData} 
                    name="inputText" 
                    value={input} 
                    placeholder="Enter anything..." 
                ></textarea>
                <div className="buttons">
                    <button onClick={toUppercase}>Upper Case</button>
                    <button onClick={toLowercase}>Lower Case</button>
                    <button onClick={toCapitalize}>Capitalize</button>
                    <button onClick={reset}>Reset</button>
                </div>
                <h2>Output:</h2>
                <p>{output}</p>
            </div>
        </div>
    );
};

export default Data;
