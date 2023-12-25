import { useState } from "react"
import Preloader from "./preloader"


export default function Card(props) {
    const [likeActive, setLikeActive] = useState(false)
    const [imgIsLoading, setImgIsLoading] = useState(true)

    function like() {
        setLikeActive(!likeActive)
    }

    return (
        <div className="card"  id={`card${props.index}`} >
            {imgIsLoading && <div className="card__loading"> <Preloader /></div>}
            <img
                loading="lazy"
                onClick={() => { props.popupImg(props.index) }}
                className="card__el"
                onLoad={() => setImgIsLoading(false)}
                src={props?.item.link}
                alt={props?.item.name} />
            <div className="card__overlay">
                <p className="card__overlay-name">{props.item.name.replace('./', '')}</p>
                <a href={props?.item.link} download><button
                    className={` card__download nav-menu__downland nav-menu__links-el `}
                    onClick={like} >download </button></a>


            </div>
        </div>)
}