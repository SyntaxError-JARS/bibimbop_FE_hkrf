import "../styles/Navbar.css";
import React from "react";
import { Link } from 'react-router-dom';

export default function Menu(props){
   

    const menuList = props.menu.map((e) => <li>{e}</li>)
     return(
         <ul>{menuList}</ul>
     )
}