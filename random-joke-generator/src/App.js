import React,{useState,useEffect}  from "react";
import ReactDOM from "react-dom/client";
// import CreateJoke from "./components/joke.js";

const JokeApp =  () => {
    const [joke,setJoke] = useState(null);
    useEffect(()  => {
        const fetchJoke =async () => {
            const data = await fetch("https://official-joke-api.appspot.com/random_joke");
            const result = await data.json();
            return result;   
        }
    },[]);
    return(
        <div>
            <h1>Joke Generator</h1>
            {console.log(joke.Object.id)}
            {/* <CreateJoke id  = {joke.id} setup = {joke.setup} punchline={joke.punchline}/> */}
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<JokeApp/>)