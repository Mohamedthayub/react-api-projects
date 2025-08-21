// const { use } = require("react");

async function getUser(){
    const userData = await fetch("https://api.github.com/users/Mohamedthayub");

    const Data = await userData.json();

    console.log(Data);
}

getUser();