import "./componentsCSS/nav.css";
import { useState } from "react";
function Card(cardP){
    let [number, setNumber] = useState(0);
    let [text, setText] = useState("click");
  
    function DisplayNum() {
    return setNumber(((number+=1)));
    }
    function DisplayText(){
      return setText(((text+ ". ")))
    }
    function Merged(){
      DisplayNum();
      DisplayText();
  
    }

    return (
        <div classNmae="Card">
            <h1>{cardP.Work} </h1>
            <p>{cardP.Name}</p>
            <img>{cardP.pfp}</img>
            <button onClick={Merged}>Click</button>
        <div>{text +" "+number}</div>
        </div>
        
    )
}

export default Card;