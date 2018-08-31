import React from 'react';
import Article from '../_assets/iconography/Article.svg';
// import Article from '-!svg-react-loader!./Article.svg';

const HeaderCard  = () => {
  return (
    <div className="headercard-section">
      <div className="headercard">
        <div className="headercard__img"></div>
        <div className="headercard__content">
          <div className="headercard__text-content">
            <img className="headercard__icon" src={Article} alt="article"/>
            <p className="headercard__date">November 20</p>
            <h2 className="headercard__title">Too much flavor for our four walls to hold</h2>
            <p className="headercard__paragraph">There are so many hours in a day, so we make every glass count. We craft full-flavored whiskey for those who find a way to get the most out of every minute of the day...</p>
            <p className="cta">read more</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderCard;