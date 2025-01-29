import { useState, useEffect } from 'react';
import './styles/style.css'
import SearchParams from './components/SearchParams';
import Pet from './components/Pet';
const App = () => {

    return (
        <div>
            <h1>Adopt Me!</h1>

            {/* <Pet name="Hawks" animal="dog" breed="german shepherd" location="uk" images="" id="2" /> */}
            {/* <Pet animal="Dog" city={"karachi"} breed={"German Shepherd"} />
            <Pet animal="cat" city={"islamabad"} breed={"persian"} />
            <Pet animal="bird" city={"lahore"} breed={"coctail"} /> */}
            <SearchParams />

        </div>
    )
}

export default App;