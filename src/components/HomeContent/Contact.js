import Button from "../Button";

export default function Contact(props){
    props = props.content;
    let form = "";
    for(let i=3; i<props.list.length; i++){
        form += `<span><input type="checkbox"><label for=${props.list[i]}>${props.list[i]}</label></input></span><br/>`
    }
    return(
        <section className="section contact">
            <h3>{props.contentText}</h3>
            <h1>{props.heading}</h1>
            <form>
                <div className="left">
                    <div>
                        <span>
                            <label>{props.list[0]}</label><br/>
                            <input type="type" /><br/>
                        </span>
                        <span>
                            <label>{props.list[1]}</label><br/>
                            <input type="email" /><br/>
                        </span>
                        <span>
                            <label>{props.list[2]}</label><br/>
                            <textarea type="textArea" /><br/>
                        </span>
                        <Button text="send request" cls="active"/>
                    </div>
                </div>
                <h4>{props.subheading}</h4>
                <div className="right" dangerouslySetInnerHTML={{__html: form}} />
            </form>
            
        </section>
    )
}