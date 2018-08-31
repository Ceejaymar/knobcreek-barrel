import React from 'react';
import Card from './Card';
import cards from './cardsInfo';

const CardContainer = () => {
  return (
    <section className="cards-section">
      <h2 className="cards__title">recent articles</h2>
      <div className="cards">
        {
          cards.map((element, key) => {
            return <Card key={ key } cardInfo={element} />
          })
        }
      </div>
    </section>
  )
}

export default CardContainer;