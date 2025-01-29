import { useState, useEffect } from 'react';
import './styles/style.css'
import SearchParams from './components/SearchParams';
import Pet from './components/Pet';
const App = () => {
    const ANIMALS = ["Select Animal", "bird", "cat", "dog", "rabbit", "reptile"];
    const breeds = ["German", "Husky"];
    const [pet, setPet] = useState([])
    const [location, setLocation] = useState("")
    const [animal, setAnimal] = useState("")
    const [breed, setBreed] = useState("")

    useEffect(() => {
        requestPets()
    }, [])


    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets`
        );
        const json = await res.json();
        // console.log(json);
        setPet(json.pets);
    }
    console.log(location)
    console.log(animal)
    console.log(breed)
    console.log(pet)
    return (
        <div>
            <h1>Adopt Me!</h1>

            {/* <Pet name="Hawks" animal="dog" breed="german shepherd" location="uk" images="" id="2" /> */}
            {/* <Pet animal="Dog" city={"karachi"} breed={"German Shepherd"} />
            <Pet animal="cat" city={"islamabad"} breed={"persian"} />
            <Pet animal="bird" city={"lahore"} breed={"coctail"} /> */}
            {/* <SearchParams /> */}
            <div className="search-params">
                <form>
                    <label htmlFor="location">
                        Location
                        <input id="location" onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
                    </label>

                    <label htmlFor="animal">
                        Animal
                        <select
                            id="animal"
                            // value={animal}
                            onChange={(e) => {
                                setAnimal(e.target.value);
                                // setBreed("");
                            }}
                            onBlur={(e) => {
                                setAnimal(e.target.value);
                                // setBreed("");
                            }}
                        >

                            {ANIMALS.map((animal) => (
                                <option key={animal} value={animal}>
                                    {animal}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label htmlFor="breed">
                        Breed
                        <select
                            disabled={!breeds.length}
                            id="breed"
                            // value={breed}
                            onChange={(e) => setBreed(e.target.value)}
                            onBlur={(e) => setBreed(e.target.value)}
                        >
                            <option />
                            {breeds.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                        </select>
                    </label>
                    <button>Submit</button>
                </form>
                {
                    pet.map((item) => {
                        return (
                            <Pet name={item.name} animal="dog" breed="boxer" location="us" images="" id="1" />
                        )
                    })
                }

            </div>
        </div>
    )
}

export default App;