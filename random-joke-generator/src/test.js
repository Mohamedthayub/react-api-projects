import React,{useState,useEffect} from "react";
import ReactDOM from "react-dom/client";

const Test = () => {
    const [btn,setbtn] = useState("Login");
    useEffect(() => {
        console.log("UseEffect Called...")
    },[])
    return (
        <div>
            <button onClick={() => {
                 if(btn == "Login"){
                    setbtn("Logout");
                 }
                 else{
                    setbtn("Login");
                 }
            }}>{btn}</button>
            <h1>Test</h1>
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Test/>)