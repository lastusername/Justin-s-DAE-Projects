import "../componentsCSS/nav.css";

function Card(cardP){
    return (
        <div classNmae="Card">
            <h1>{cardP.Work} </h1>
            <p>{cardP.Name}</p>
            <img>{cardP.pfp}</img>
        </div>
    )
}

export default Card;