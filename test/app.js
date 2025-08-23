import getJoke  from "./getJoke.js";
export const Jokeid = document.querySelector("#jokeId");
export const Joke = document.querySelector("#joke");
const button =  document.querySelector("#btn");


button.addEventListener("click", getJoke);
