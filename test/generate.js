import { Jokeid,Joke } from "./app.js";
function generateJoke(jokes,id){
    Jokeid.innerText = id;
    Joke.innerText = jokes;   
}

export default generateJoke