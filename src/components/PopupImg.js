import { useCallback, useEffect, useState, useRef } from "react"
import Preloader from "./preloader"



export default function PopupImg(props) {
    const [imgStyle, setImgstyle] = useState({})
    const [currentImg, setCurrentImg] = useState(props.images[props.currentImageIndex])
    const [elPos, setElPos] = useState({})
    const [openImg, setOpenImg] = useState(false);
    const [scale, setScale] = useState(1);
    const [imgIsLoad, setImgIsLoad] = useState(true);
    const elPosRef = useRef(elPos);
    const modalDOMel = useRef(null);
    const [prevTouchPosX, setPrevTouchPosX] = useState(0)
    const [isFullScreen, setIsfullScreen] = useState(false)

    const imgStyleDefault = {
        height: 'max-content',
        maxWidth: `${isFullScreen ? '99vw' : '85vw'}`,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',

    }
    const imgStyleStart = (el) => {
        return {
            minWidth: el.width,
            maxWidth: el.width,
            minHeight: el.height,
            maxHeight: el.height,
            top: el.top,
            left: el.left,
            transform: 'translate(0%, 0%)',

        }

    }
    /* closemodal */
    useEffect(() => {
        elPosRef.current = elPos

    }, [elPos])

    useEffect(() => {
        if (props.currentImageIndex !== null) {
            const currentDOMItem = document.querySelector(`#card${props.currentImageIndex}`)
            const getPos = currentDOMItem.getBoundingClientRect()
            setElPos(imgStyleStart(getPos))
            setCurrentImg(props.images[props.currentImageIndex])
        }
    }, [props.currentImageIndex])

    useEffect(() => {
        const currentDOMItem = document.querySelector(`#card${props.currentImageIndex}`)
        const getPos = currentDOMItem.getBoundingClientRect()
        setElPos(imgStyleStart(getPos))
        setImgstyle(imgStyleStart(getPos))
        setTimeout(() => {
            setOpenImg(true)
            setImgstyle(imgStyleDefault)
        }, 100);
        window.addEventListener('scroll', closePopupImg)
    }, [])
    useEffect(() => {
        if (isFullScreen) {
            window.removeEventListener('scroll', closePopupImg);
        }
        else {
            window.addEventListener('scroll', closePopupImg);
        }

    }, [isFullScreen])

    /* scale */

    const handleScaleChange = (event) => {
        event.stopPropagation()
        if (scale < 2) {
            setScale(scale + 0.5);
        }
        else {
            setScale(1)
        }
    };

    function closePopupImg(event) {
        event.stopPropagation()
        console.log('close')
        console.log(event)
        window.removeEventListener('scroll', closePopupImg);
        setScale(1)
        setImgstyle(elPosRef.current)
        setOpenImg(false)
        setIsfullScreen(false)
        setTimeout(() => {
            props.closePopupImg()
            setImgstyle(imgStyleDefault)
        }, 300);

    }

    function closeModalClick(event) {
        event.stopPropagation()
        console.log('click')
        if (event.target.classList.contains('popup__bg')) {
            closePopupImg(event)
        }
    }
    function fullScreenOpen(event) {
        event.stopPropagation();
        setIsfullScreen(true)
        if (modalDOMel.current.requestFullscreen) {
            modalDOMel.current.requestFullscreen();
        } else if (modalDOMel.current.webkitrequestFullscreen) {
            modalDOMel.current.webkitRequestFullscreen();
        } else if (modalDOMel.current.mozRequestFullscreen) {
            modalDOMel.current.mozRequestFullScreen();
        }
    }
 

    function endTouchScreen(event) {
        event.stopPropagation()
        const ev = event.changedTouches[0]
        if (prevTouchPosX < ev.clientX) {
            props.switchNextImg(-1)
            return
        } else if (prevTouchPosX > ev.clientX) {
            props.switchNextImg(+1)
            return
        }

    }
    function startTouchScreen(event) {
        event.stopPropagation()
        const ev = event.changedTouches[0]
        setPrevTouchPosX(ev.clientX)

    }
    return (
        <div
            ref={modalDOMel}
            className={`popup ${openImg ? 'popup__bg' : 'popup__bg_clear'}`}
            onClick={closeModalClick}
            onTouchStart={startTouchScreen}
            onTouchEnd={endTouchScreen}
        >
            <div className={`popup__header ${openImg ? 'popup__header_open' : 'popup__header_close'}`} >
                <p className="popup__header-count">
                    {`${props.currentImageIndex + 1} / ${props.images.length}`}
                </p>
                <p className="popup__header-itemName">{currentImg.name}</p>
                <button className="popup__header-btn popup__header-btn_zoom" onClick={handleScaleChange} />
                <button className="popup__header-btn popup__header-btn_fullscreen" onClick={fullScreenOpen}></button>
                <a download href={currentImg.link}><button className="popup__header-btn popup__header-btn_download"></button></a>
                <button className="popup__header-btn popup__header-btn_close" onClick={closePopupImg} />

            </div>

            <div className='popup-content'>
                <button
                    onClick={() => { props.switchNextImg(-1) }}
                    className={`popup__move-btn popup__move-btn_left ${openImg && 'popup__move-btn_show-left'}`} />

                <button
                    onClick={() => { props.switchNextImg(+1) }}
                    className={`popup__move-btn popup__move-btn_right ${openImg && 'popup__move-btn_show-right'}`} />
                <div style={imgStyle} className={`${openImg && 'popup__img'} popup__img-position`}>
                    {imgIsLoad && <Preloader />}
                    <img
                        style={{ transform: `scale(${scale})` }}
                        className='popup__img-el'
                        onLoad={() => setImgIsLoad(false)}
                        src={currentImg.link}
                        alt={currentImg.link} />


                </div>

            </div>

        </div>
    )

}