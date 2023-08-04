import { useEffect, useState } from "react"


export default function Header() {
    const [isActive, setIsActive] = useState(false)
    useEffect(() => {
        setIsActive(true)
    }, [])


    return (
        <div className="header">
            <div className={`header__block ${isActive && 'header__block_active'}`}>
                <h1 className="header__block-heading">RDS GP 20--</h1>
                <div className="header__desc">
                    <p className="header__desc-el">Фотограф: Неизвестный</p> <a className="header__desc-el" href="#">Безназвания</a>
                </div>
            </div>
            <div className={`header__back ${isActive && 'header__back_active'}`}></div>

        </div>

    )
}