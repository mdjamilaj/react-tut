// import React from "react";

// const Nav = (props) => {
//     return <nav>{props.toggle ? <h1>Nav</h1> : ''}</nav>
// }

// export default Nav;


import React from 'react';
import './Nav.css';


function Nav(props) {
    return (
        <nav>
        {/* // className={props.toggle ? 'display-block' : 'display-none'} */}
            <header className='navbar'>
                <div className='navbar__title navbar__item' onClick={props.setToggle}>Cutco</div>
                <div className='navbar__item'>About Us</div>
                <div className='navbar__item'>Contact</div>
                <div className='navbar__item'>Help</div>        
            </header>
        </nav>
    )
}

export default Nav;