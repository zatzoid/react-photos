import { useState } from "react"



export default function NavMenu(props) {

    const linkZIP = process.env.PUBLIC_URL + '/photosAll.zip'




    return (
        <>
            <div id="nav-menu" className={`nav-menu-wrapper `}>
                <div className={`nav-menu ${props.isNavMenuOnTop ? 'nav-menu_active' : ''}`}>
                    <p className="nav-menu__heading">react-photos</p>
                    <div className="nav-menu__links">

                        <a download='photosAll.zip' className={`nav-menu__downland nav-menu__links-el `} href={linkZIP}>скачать все файлы</a>
                        <a rel="noreferrer" className="nav-menu__gh nav-menu__links-el" target="_blank" href="https://github.com/zatzoid/react-photos" >github</a>
                        <a rel="noreferrer" className="nav-menu__tg  nav-menu__links-el" target="_blank" href="https://t.me/zatzz" > telegram</a>
                    </div>

                </div>
            </div>

        </>
    )
}