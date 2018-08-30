import React from 'react';

const HeaderCard  = () => {
  return (
    <div className="headercard-section">
      <div className="headercard">
        {/* <img className="headercard__img" src={require("../_assets/photography/pour-mug.jpg")} alt="pouring into mug"/> */}
        <div className="headercard__img"></div>
        <div className="headercard__content">
          <img src="" alt=""/>
          <p>this is more content</p>
          <h2></h2>
          <p>There are so many hours in a day, so we make every glass count. We craft full-flavored whiskey for those who find a way to get the most out of every minute of the day...</p>
          <p className="cta">read more</p>
        </div>
      </div>
    </div>
  )
}

export default HeaderCard;