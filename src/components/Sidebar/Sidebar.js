import React from 'react';
import './Sidebar.css';




function Sidebar(props) {

    // const sidebarProps = {
    //     open: {
    //         x: "0%",
    //         delayChildren: 300,
    //         staggerChildren: 400
    //     },
    //     closed: {
    //         delay: 500,
    //         staggerChildren: 20,
    //         x: "-100%"
    //     }
    // };
    
    // const itemProps = {
    //     open: { opacity: 1, y: 0 },
    //     closed: { opacity: 0, y: 20 }
    // };
    
    // const SidePanel = posed.ul(sidebarProps)
    // const Item = posed.li(itemProps)

    return (
        <ul className={props.toggle ? 'fadeInLeft' : 'fadeOutLeft'}>
            <li className="item">Home</li>
            <li className="item">About</li>
            <li className="item">Documentation</li>
            <li className="item">Tell Info</li>
            <li className="item">Power Shall</li>
            <li className="item">Contact</li>
        </ul>
    )
}

export default Sidebar;