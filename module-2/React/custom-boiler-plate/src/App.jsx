import React from 'react';
import './styles/style.css'
import SearchParams from './components/SearchParams';
import Pet from './components/Pet';
const App = () => {

    return (
        <div>
            <h1>Adopt Me!</h1>
            <Pet name="Luna" animal="dog" />
            {/* <Pet animal="Dog" city={"karachi"} breed={"German Shepherd"} />
            <Pet animal="cat" city={"islamabad"} breed={"persian"} />
            <Pet animal="bird" city={"lahore"} breed={"coctail"} /> */}
            {/* <SearchParams /> */}
        </div>
    )
}

export default App;