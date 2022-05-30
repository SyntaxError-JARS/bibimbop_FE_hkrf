import React from 'react'
import { Router } from 'react-router-dom';
import { Link } from 'react-router-dom';
import BannerImage from '/Users/rf/Desktop/bibimbop_FE_hkrf/reston-branch/src/assets/image.jpg';
import "/Users/rf/Desktop/bibimbop_FE_hkrf/reston-branch/src/styles/Home.css";


function CustomerWelcome() {

  const location = "Reston VA, 19047"; 
  return (
    <div className='home'style={{backgroundImage:`url(${BannerImage})` }}>
       <div className='headerContainer'>
         <h1>Welcome to BibimBop</h1>
     <p>Korean Cuisine</p>
     <h3>{location}</h3>
     <Link to="/menu">
     <button>ORDER NOW</button>
     </Link>
     </div>
    </div>
  )
}

export default CustomerWelcome
