export default function Clients(props){
    props = props.content;
    return(
        <section className="section clients">
            <h1>{props.heading}</h1>
            <article>
                {props.list.map((item, i)=>{
                    return <img src={item} key={i}w alt="client logo"/>
                })}
            </article>
        </section>
    )
}