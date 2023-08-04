import Card from "./Card";


export default function Content({imagePaths}) {

    return (
        <div className="content">

            {imagePaths.map((el) => ( <Card name={el.name} link={el.link} key={el.name} /> ))}
        </div>

    )

}