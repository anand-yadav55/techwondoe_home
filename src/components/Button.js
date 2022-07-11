import './button.css'
export default function Button(props){
    return <button className={`def-btn ${props.cls=="active"?"active":""}`}>{props.text}</button>
}