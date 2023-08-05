

export default function Card(props) {
    return(
    <div className="card">
        <img className="card__el" src={`${props.link}`} alt={props.name} />

    </div>)
}