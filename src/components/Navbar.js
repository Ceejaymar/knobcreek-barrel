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
        {/* <img className="navbar__social-link" src={facebook} alt="social link"/> */}
        {/* <img className="navbar__social-link" src={twitter} alt="social link"/> */}
          <a href="#" className="navbar__social-link"><img src={facebook} alt="facebook"/></a>
          <a href="#" className="navbar__social-link"><img src={twitter} alt="twitter"/></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;