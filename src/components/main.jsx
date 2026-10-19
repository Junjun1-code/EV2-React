import { useState } from 'react';
import Search from './search.jsx'
import Cards from './cards.jsx'

function Main() {
  const [drinks, setDrinks] = useState([]);

    return (
        <>
            <Search setDrinks={setDrinks} />
            {/* <div style={{ display: 'flex', flexWrap: 'wrap' }}> */}
            {drinks.map((drink) => (
                <Cards key={drink.idDrink} drink={drink} />
            ))}
        </>
    )
}


export default Main