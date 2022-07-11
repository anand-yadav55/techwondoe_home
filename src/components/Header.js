export default function Header(props){
    return (
        <header className='top-bar'>
            <div className='menu'>
            <span className="hamberg">
                <span></span>
                <span></span>
            </span>
            <span>MENU</span>
            </div>
            <div className='branding'>
                <a href='/'>
                    <img src={props.logo} alt="brand logo" width={200}/>
                </a>
            </div>
        </header>
    );
}