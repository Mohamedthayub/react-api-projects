import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import API_URL from "./utils/Constants.js";
const JokeApp = () => {
    const [joke, setJoke] = useState(null);
    const [loading ,setLoading] = useState(false);
    useEffect(() => {
        fetchData();
    },[])
    async function fetchData() {
        setLoading(true);
        try{
            const data = await fetch(API_URL);
            const response = await data.json();
            setJoke(response);
        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }
    return (
        <div className="main">
            <div className="joke-container">
                {
                joke ? (
                    <div>
                    <h4>Joke Id : {joke.id}</h4>
                    <h2>{joke.setup}</h2>
                    <h3>{joke.punchline}</h3>
                    </div>
                )
                : (
                    <p>Click the button to get a joke</p>
                )
            }
            <div className="btn-container">
                <button onClick={fetchData} disabled = {loading}
                >{loading ? "Loading ..." : "Get Joke"}</button>
            </div>
            </div>
        </div>
    )
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JokeApp />);
