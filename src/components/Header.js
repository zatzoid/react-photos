import { useEffect, useState } from "react"


export default function Header() {
    const [isActive, setIsActive] = useState(false)
    const [showbtn, setShowBtn] = useState(false)
    useEffect(() => {
        setIsActive(true)
        setTimeout(() => {
            setShowBtn('down')
        }, 3000);
    }, [])


    return (
        <div className="header">
            <div className={`header-block ${isActive && 'header-block_active'}`}>
                <div className='header-block__side' >
                    <h1 className={`header-block__block-heading header-block__side_left ${isActive && 'header-block__side_active'}`}>
                        RDS GP</h1>
                    <p className={`header-block__desc-el header-block__side_left ${isActive && 'header-block__side_active'}`}>Фотограф: Неизвестный</p>

                </div>
                <div className="header-block__border"></div>
                <div className='header-block__side'>
                    <p className={`header-block__block-heading header-block__side_right ${isActive && 'header-block__side_active'}`}>2020</p>
                    <p className={`header-block__desc-el header-block__side_right ${isActive && 'header-block__side_active'}`}>Безназвания</p>
                </div>
            </div>
            <div className={`header__back ${isActive && 'header__back_active'}`}></div>
           <a href="#content" className={`header__scroll-btn ${showbtn === 'down' ? 'header__scroll-btn_active':''}`} />
        </div>

    )
}