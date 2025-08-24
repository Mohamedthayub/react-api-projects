import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
const JokeApp = () => {
    const [joke, setJoke] = useState("");
    async function fetchData() {
        const data = await fetch("https://official-joke-api.appspot.com/random_joke");
        const response = await data.json();
        setJoke(response);
    } 
    return (
        <div className="main">
            <div className="joke-container">
                <h4 className = "joke-id">Joke id :{joke.id}</h4>
                <h2>{joke.setup}</h2>
               <div className="btn-container">
                    <button className="gen-joke" onClick={fetchData}>getJoke</button>
               </div>
            </div>
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JokeApp />);
