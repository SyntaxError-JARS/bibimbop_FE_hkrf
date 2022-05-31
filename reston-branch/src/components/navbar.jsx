import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


export default function NavBar(){

    return(
        <div className="navbar">
<nav>
<Link to="/">Home Page</Link>
<span>  </span>

<Link to="/login">Login</Link>
<span>  </span>

<Link to="/menu">Menu</Link>
<span>  </span>

<Link to="/order">Order</Link>
<span>  </span>
</nav>

</div>
    )

}