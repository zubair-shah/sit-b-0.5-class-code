import { useState, useEffect } from "react";
import useBreedList from "../hooks/useBreedList";
import Result from "./Result";
const ANIMALS = ["Select Animal", "bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState('')
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds, status] = useBreedList(animal);

    useEffect(() => {
        requestPets()
    }, [])
    // const locationChange = (event) => {
    //     // location += event.target.value
    //     // console.log(event.target.value)
    //     setLocation(event.target.value)
    // }
    let apiURL = null;
    let mode = import.meta.env.MODE;
    console.log('import.meta.env.API_URL_DEV', import.meta.env)
    if (mode === "development") {
        apiURL = import.meta.env.VITE_API_URL_DEV;
    } else {
        apiURL = import.meta.env.VITE_API_URL_PROD
    }
    console.log(apiURL)
    async function requestPets() {
        const res = await fetch(
            `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed}`
        );
        const json = await res.json();
        console.log(json.pets)
        setPets(json.pets);
    }

    console.log(location)
    console.log(animal)
    console.log('pets', pets)
    console.log('status', status)

    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets()
            }}>
                <label htmlFor="location">
                    Location
                    <input id="location" onChange={(e) => setLocation(e.target.value)} value={location} placeholder="Location" />
                </label>
                <label htmlFor="animal">
                    Animal
                    <select
                        id="animal"
                        value={animal}
                        onChange={(e) => {
                            setAnimal(e.target.value);
                            getBreed(e.target.value)
                            // setBreed("");
                        }}
                        onBlur={(e) => {
                            setAnimal(e.target.value);
                            // setBreed("");
                        }}
                    >
                        {ANIMALS.map((animal) => <option value={animal}>{animal}</option>)}


                    </select>
                </label>
                <label htmlFor="breed">
                    Breed
                    <select
                        disabled={!breeds.length}
                        id="breed"
                        value={breed}
                        onChange={(e) => setBreed(e.target.value)}
                        onBlur={(e) => setBreed(e.target.value)}
                    >
                        {status === true ?
                            <option>...loading</option> :
                            breeds.map((breed) => (
                                <option key={breed} value={breed}>
                                    {breed}
                                </option>
                            ))}
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
            <Result pets={pets} />
        </div>
    );
};

export default SearchParams;