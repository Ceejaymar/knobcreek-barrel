import React from 'react';
import facebook from '../_assets/iconography/Facebook_Icon.svg';
import twitter from '../_assets/iconography/TwitterIcon.svg';
import brand from '../_assets/Logo/www.knobcreek.com-1311011787501770.svg';

const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className="sponsored">sponsored by</div>
      <nav className="navbar">
        <img className="navbar__brand" src={brand} alt="brand name"/>
        <div className="navbar__logo-box">
          <div className="navbar__logo">logo</div>
        </div>
        <div className="navbar__social">
          <a href="https://www.facebook.com/KnobCreek/" target="_blank" className="navbar__social-link" rel="noopener noreferrer"><img src={facebook} alt="facebook"/></a>
          <a href="https://twitter.com/knobcreek" target="_blank" className="navbar__social-link" rel="noopener noreferrer"><img src={twitter} alt="twitter"/></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;