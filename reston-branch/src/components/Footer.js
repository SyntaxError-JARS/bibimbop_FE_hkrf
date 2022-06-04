import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';
import "/Users/rf/Desktop/bibimbop_FE_hkrf/reston-branch/src/styles/Footer.css"

function Footer() {
  return (
    <div className='footer'>
        <div className= 'socialMedia'>
          < InstagramIcon /> < FacebookIcon /> < TwitterIcon /> <EmailIcon />
        </div>
        <p> &copy; 2022 BibimBop.com </p>
    
    </div>
  )
}

export default Footer
