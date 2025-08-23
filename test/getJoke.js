import generateJoke from "./generate.js";

async function getJoke(){
    const data =  await fetch("https://official-joke-api.appspot.com/random_joke");
    const response = await data.json();
    const joke = response.setup;
    const id = response.id;  
    return {joke,id};
}

getJoke().then((res) =>{
    generateJoke(res.joke,res.id);
})

export default getJoke;

