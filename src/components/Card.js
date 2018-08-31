import React from 'react';

const Card = ({ cardInfo }) => {
  const { image, icon, date, title, cta, background, position } = cardInfo;

  const bgInfo = background ? background : "cover";
  const psInfo = position ? position : "right";

  const imgStyle = {
    height: "45rem",
    backgroundImage: `url(${ image })`,
    backgroundPosition: `${ psInfo }`,
    backgroundSize: `${ bgInfo }`,
  };

  return (
    <div className="card"> 
      <div style={imgStyle} className="card__img"></div>
      <div className="card__content">
        <div className="card__icon-circle">
          <img className="card__icon" src={ icon } alt="article"/>
        </div> 
        <p className="card__date">{ date }</p>
        <h2 className="card__title">{ title}</h2>
        <p className="cta">{ cta }</p>
      </div>
    </div>
  )
}

export default Card;

