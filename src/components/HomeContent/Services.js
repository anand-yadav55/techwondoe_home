import Button from "../Button";

export default function Services(props){
    props = props.content;
    console.log(props)
    return(
        <section className="section services">
            <h3>{props.contentText}</h3>
            <h1>{props.heading}</h1>
            <h1>{props.subheading}</h1>
            <ul>
                {props.list.map((item, i) => {
                    return <li key={i}>{item}</li>
                })}
            </ul>
            <Button text="Learn More"/>
            <img src={props.images.fields.file.url}/>
        </section>
    )
}