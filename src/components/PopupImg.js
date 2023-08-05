

export default function PopupImg(props) {
    return (
        <div>
            <div></div>
            <img src={props.link} />
            <p>{props.name}</p>
        </div>
    )

}