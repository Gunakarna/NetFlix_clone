import React from 'react'
import './TitleCards.css'

import cards_data from '../../assets/cards/Cards_data'

const TitleCards = () => {
  return (
    <div className='Title-Cards'>
        <h2>Popular on Netflix</h2>
        <div className="card-list">
            {cards_data.map((card, indx)=>{
                return <div className="card" key={indx}>
                    <img src={card.image} alt="" />
                    <p>{card.name}</p>
                </div>

            })}
        </div>
      
    </div>
  )
}

export default TitleCards
