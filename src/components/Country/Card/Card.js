import React from 'react';

const Card = (props) => {
    const card = props.card;
    const totalPopulation = card.reduce((sum, country) => sum + country.population, 0)
    return (
        <div>
            <h2>Card Added: {card.length}</h2>
            <h3>Population: {totalPopulation}</h3>
        </div>
    );
};

export default Card;