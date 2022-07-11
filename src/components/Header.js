import { useState } from 'react';
import './header.css'
export default function Header(props){
    let [isOpen, setIsOpen] = useState(false);
    let [cls, setCls] = useState("close");
    const handleMenu = (e)=>{
        setIsOpen(prev=>!prev);
        setCls(isOpen ? "open" : "close");
    }
    return (
        <header className='top-bar'>
            <div className='menu'>
                <div className={`menu-btn ${cls}`} onClick={handleMenu}>
                    <div className='menu-btn__burger'></div>
                </div>
            </div>
            <div className='branding'>
                <a href='/'>
                    <img src={props.logo} alt="brand logo" width={200}/>
                </a>
            </div>
            <div className={`menuContent menu${cls}`}>
                <div className='menuItem'><a>HOME</a></div>
                {props.menuItem?.list.map((item, i)=>{
                    return <div className="menuItem" key={i}><a>{item}</a></div>
                })}
            </div>
        </header>
    );
}