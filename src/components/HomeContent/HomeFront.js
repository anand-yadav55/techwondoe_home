import Button from "../Button"
export default function HomeFront(props){
    console.log(props)
    props = props.content
    return(
        <section className="section front">
            <h3>{props.description}</h3>
            <h1 className="title">{props.heading}</h1>
            <h1 className="title">{props.subheading}</h1>
            <span>
                <Button text={"Enquire now"} cls="active"/>
                <Button text={"View Case Studies"}/>
            </span>
        </section>
    )
}