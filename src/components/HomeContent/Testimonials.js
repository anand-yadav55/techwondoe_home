import Button from "../Button"

export default function Testimonials(props){
    return(
        <section className="section testimonials">
            <h3>{props.content.contentText}</h3>
            <h1>{props.content.description}</h1>
            <article>
                <div className="reviews">
                    {props.reviews.map((item, i)=>{
                        return <div className="review" style={{left: i*80+"vw"}} key={i}>
                            <div className="left">
                                <img src={item.profileImage.fields.file.url}/>
                            </div>
                            <div className="right">
                                <div className="reviewer">{item.author}</div>
                                <div className="location">{item.location}</div>
                                <div className="description">{item.description}</div>
                                <Button text="view case study" cls="active"/>
                            </div>
                        </div>
                    })}
                </div>
            </article>
        </section>
    )
}