export default function WhyUs(props){
    props = props.content;
    return(
        <section className="section whyus">
            <h3>{props.contentText}</h3>
            <article>
                <ul className="left">
                    {props.heading.split("\\n").map((item, i)=>{
                        return <li key={i}>{item}</li>
                    })}
                </ul>
                <ul className="right">
                    {props.list.map((item, i)=>{
                        return <li key={i}>{item}</li>
                    })}
                </ul>
            </article>
        </section>
    )
}