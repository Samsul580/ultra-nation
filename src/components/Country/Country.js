import React from 'react';
import './Country.css'

const Country = (props) => {
    const { name, capital, population, area, flag, region } = props.country;
    const addCountry = props.addCountry;
    // console.log(props.country);
    return (
        <div className='country-box'>
            <img src={flag} alt="" />
            <h1>{name}</h1>
            <p>Capital: {capital}</p>
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Region: {region}</p>
            <button onClick={() => addCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;