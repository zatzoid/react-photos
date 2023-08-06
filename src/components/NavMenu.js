import { useState } from "react"


export default function NavMenu(props) {
    const [likeActive, setLikeActive] = useState(false)
    function like() {
        setLikeActive(!likeActive)
    }




    return (
        <div id="nav-menu" className={`nav-menu-wrapper ${props.currentImage !== null ? 'nav-menu-wrapper_top' : ''}`}>
            <div className={`nav-menu ${props.isNavMenuOnTop ? 'nav-menu_active' : ''}`}>
                <p className="nav-menu__heading">react-photos</p>
                <div className="nav-menu__links">
                    {props.currentImage !== null ? <div className="nav-menu__popup-img">
                        <button
                            onClick={() => { props.handleScaleChange() }}
                            className="nav-menu__links-el nav-menu__loup" />
                        <button
                            onClick={() => { props.closePopupImg() }}
                            className="nav-menu__links-el nav-menu__close" />

                    </div> : ''}
                    <button className={`nav-menu__like nav-menu__links-el ${likeActive && 'nav-menu__like_active'}`} onClick={like} />
                    <a className="nav-menu__tg nav-menu__links-el" href="#" />
                    <a className="nav-menu__gh nav-menu__links-el" target="_blank" href="https://github.com/zatzoid/react-photos" />

                </div>

            </div>
        </div>
    )
}