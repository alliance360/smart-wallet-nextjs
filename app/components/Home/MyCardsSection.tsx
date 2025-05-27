'use client';

import { useEffect, useRef } from 'react';

export default function MyCardsSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const cards = [
    { 
      id: 1, 
      background: 'bg-primary', 
      balance: '$ 1,256,90', 
      number: '•••• 9905',
      expiry: '12 / 25',
      ccv: '553'
    },
    { 
      id: 2, 
      background: 'bg-dark', 
      balance: '$ 1,256,90', 
      number: '•••• 9905',
      expiry: '12 / 25',
      ccv: '553'
    },
    { 
      id: 3, 
      background: 'bg-secondary', 
      balance: '$ 1,256,90', 
      number: '•••• 9905',
      expiry: '12 / 25',
      ccv: '553'
    },
  ];

  return (
    <div className="section full mt-4">
      <div className="section-heading padding">
        <h2 className="title">My Cards</h2>
        <a href="/cards" className="link">View All</a>
      </div>

      <div className="carousel-single splide" ref={carouselRef}>
        <div className="splide__track">
          <ul className="splide__list">
            {cards.map((card) => (
              <li key={card.id} className="splide__slide">
                <div className={`card-block ${card.background}`}>
                  <div className="card-main">
                    <div className="card-button dropdown">
                      <button type="button" className="btn btn-link btn-icon">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                      </button>
                    </div>
                    <div className="balance">
                      <span className="label">BALANCE</span>
                      <h1 className="title">{card.balance}</h1>
                    </div>
                    <div className="in">
                      <div className="card-number">
                        <span className="label">Card Number</span>
                        {card.number}
                      </div>
                      <div className="bottom">
                        <div className="card-expiry">
                          <span className="label">Expiry</span>
                          {card.expiry}
                        </div>
                        <div className="card-ccv">
                          <span className="label">CCV</span>
                          {card.ccv}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
