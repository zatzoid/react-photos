import { useState } from "react"


export default function Card(props) {
    const [likeActive, setLikeActive] = useState(false)
    function like() {
        setLikeActive(!likeActive)
    }

    return (
        <div className="card">
            <img
                onClick={() => { props.popupImg(props.index) }}
                className="card__el"
                src={props?.link}
                alt={props?.name} />
            <div className="card__overlay">
                <p className="card__overlay-name">{props.name.replace('./', '')}</p>
                <button
                    className={`nav-menu__like nav-menu__links-el ${likeActive && 'nav-menu__like_active'}`}
                    onClick={like} />


            </div>
        </div>)
}