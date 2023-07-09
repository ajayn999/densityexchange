import React from 'react';
import './navbar.css';



function Navbar() {
  return (
    <div className='nav-head'>
        <a href="home"><img style={{    width: '40px', height: '35px'}} src="Images/LogoImage.png" alt="" /></a>
        <ul className='nav-ls'>
            <a href="*"><li>Emotions</li></a>
            <a href="*"><li>Monifesto</li></a>
            <a href="*"><li>Self-awareness test</li></a>
            <a href="*"><li>Work with us</li></a>
        </ul>
      <div className='btn-nav'>
        <button>Dowload App</button>
      </div>
    </div>
  )
}

export default Navbar
