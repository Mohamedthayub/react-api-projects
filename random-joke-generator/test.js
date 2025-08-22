async function getData(){
    const data = await fetch("https://official-joke-api.appspot.com/random_joke");
    const result = await data.json();
    console.log(result.punchline);
}
