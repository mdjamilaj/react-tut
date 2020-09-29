import React from "react";

const Nav = (props) => {
    return <nav>{props.toggle ? <h1>Nav</h1> : ''}</nav>
}

export default Nav;


// import React from 'react';

// function Nav(props) {
//     return <nav>{props.toggle ? <h1>Hello Nav</h1> : ''}</nav>
// }

// export default Nav;