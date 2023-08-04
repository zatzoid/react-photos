import { useState } from "react"


export default function NavMenu() {
    const [likeActive, setLikeActive] = useState(false)

    function like() {
        setLikeActive(!likeActive)
    }

    return (
        <div className="nav-menu">
            <p className="nav-menu__heading">react-photos</p>
            <div className="nav-menu__links">
                <button className={`nav-menu__like nav-menu__links-el ${likeActive && 'nav-menu__like_active'}`} onClick={like} />
                <a className="nav-menu__tg nav-menu__links-el" href="#" />
                <a className="nav-menu__gh nav-menu__links-el" href="#" />

            </div>

        </div>

    )
}