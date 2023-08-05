import { useState, useEffect, useLayoutEffect } from "react"


export default function NavMenu(props) {
    const [likeActive, setLikeActive] = useState(false)
    function like() {
        setLikeActive(!likeActive)
    }
    



    return (
        <div id="nav-menu" className="nav-menu-wrapper">
        <div  className={`nav-menu ${props.isNavMenuOnTop ? 'nav-menu_active' : ''}`}>
            <p className="nav-menu__heading">react-photos</p>
            <div className="nav-menu__links">
                <button className={`nav-menu__like nav-menu__links-el ${likeActive && 'nav-menu__like_active'}`} onClick={like} />
                <a className="nav-menu__tg nav-menu__links-el" href="#" />
                <a className="nav-menu__gh nav-menu__links-el" href="#" />

            </div>

        </div>
        </div>
    )
}