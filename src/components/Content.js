import Card from "./Card";


export default function Content({ imagePaths, popupImg }) {

    return (
        <div className="content" id="content">

            {imagePaths.map((el, index) => (
              
                    <Card
                        item={el}
                        index={index}
                        key={index}
                        popupImg={popupImg} />))}
        </div>

    )

}