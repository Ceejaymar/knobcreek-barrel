import React from 'react';
import HeaderCard from './HeaderCard';

const Header = () => {
  return (
    <section className="header-container">
      <div className="header">
        {/* <div className="header__content"> */}
          <main className="header__text">
            <h1 className="header__title">maple never tasted so good</h1>
            <div className="header__paragraph">We blend this bourbon with natural smoked maple flavors for a unique, smokey sweetness. Full bodied, inviting maple notes that lift to smoke and are complimented with rich vanilla caramel. Smoked hickory and mapled wood, with hints of earthy grains.</div>
          </main>
          <img className="header__img" src={require("../_assets/photography/KnobCreek.png")} alt=""/>        
        {/* </div> */}
      </div>
      <div className="sub-section">
        <HeaderCard />
      </div>
    </section>
  )
}

export default Header;