import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return(
        
        <Tilt className= 'ma4' style={{height: '130px', width:'130px', background: 'linear-gradient(89deg, #FF5EDF 0%, #04C8DE 100%)'}}>
            <div className='br2 shadow-2' style={{height: '130px', width:'130px'}}>
                <img alt='logo' src={brain} className = 'pt4'/>
             </div>
        </Tilt>
       
        );
}

export default Logo;