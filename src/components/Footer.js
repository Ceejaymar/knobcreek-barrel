import React from 'react';
import brand from '../_assets/Logo/www.knobcreek.com-1311011787501770.svg';
import facebook from '../_assets/iconography/Facebook_Icon.svg';
import twitter from '../_assets/iconography/TwitterIcon.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <span className="share-on">share on</span>
        <a href="#" className="footer__social-link"><img src={facebook} alt="facebook"/></a>
        <a href="#" className="footer__social-link"><img src={twitter} alt="twitter"/></a>
      </div>
        <img className="navbar__brand" src={brand} alt="brand name"/>
    </footer>
  )
}

export default Footer;