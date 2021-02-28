import { useEffect, useState } from 'react';
import './App.css';
import Card from './components/Country/Card/Card';
import Country from './components/Country/Country';

function App() {
    const [countries, setCountries] = useState([]);
    const [card, setCard] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error))
    }, 0);
    const addCountry = (country) => {
        const newCard = [...card, country];
        setCard(newCard);
    }
    return (
        <div className="App">
            <h2>Added Country: {card.length}</h2>
            <Card card={card}></Card>
            {
                countries.map(country => <Country country={country} addCountry={addCountry} key={country.alpha3Code}></Country>)
            }
        </div>
    );
}

export default App;
