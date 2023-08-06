


export default function PopupImg(props) {


    return (
        <div className="popup">
            <div className='popup-content'>
                <button
                    onClick={() => { props.switchNextImg(-1) }}
                    className="popup__move-btn popup__move-btn_left" />

                <button
                    onClick={() => { props.switchNextImg(+1) }}
                    className="popup__move-btn popup__move-btn_right" />
                <div className="popup__img">
                    <img
                        style={{ transform: `scale(${props.scale})` }}
                        className='popup__img-el'
                        src={props.currentImage?.link} />
                </div>
                <p>{props.currentImage?.name}</p>
            </div>
        </div>
    )

}