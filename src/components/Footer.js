export default function Footer(props){
    return(
        <footer className="footer">
            <div className="footer-branding">
                <img src={props.logo} alt="logo" />
            </div>
            <div className="footer-links">
                {props.content?.list.map((item, i)=>{
                return <a key={i}><span>{item}</span></a>
                })}
            </div>
            <div className="footer-social">
                <a><span>{props.content?.heading}</span></a>{" "}
                <a><span>{props.content?.subheading}</span></a>
            </div>
        </footer>
    )
}