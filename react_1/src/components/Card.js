import "../componentsCSS/nav.css";

function Card(cardP){
    return (
        <div>
            <h1>{cardP.Work} </h1>
            <p>{cardP.Name}</p>
        </div>
    )
}

export default Card;