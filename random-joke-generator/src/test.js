
async function getData(){
    const data = await fetch("https://official-joke-api.appspot.com/random_joke");
    const response = await data.json();
    console.log(response);
}

getData();