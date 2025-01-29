import { useState, useEffect } from "react";
import useBreedList from "../hooks/useBreedList";
import Pet from "./Pet";
const ANIMALS = ["Select Animal", "bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => {
    const [location, setLocation] = useState('')
    const [animal, setAnimal] = useState('')
    const [breed, setBreed] = useState("");
    const [pets, setPets] = useState([]);
    const [breeds, status] = useBreedList(animal);

    useEffect(() => {
        requestPets()
    }, [animal, location])
    // const locationChange = (event) => {
    //     // location += event.target.value
    //     // console.log(event.target.value)
    //     setLocation(event.target.value)
    // }


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
            <form>
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
                <button>Submit</button>
            </form>
            {pets.map((pet) => {

                return (
                    <Pet
                        animal={pet.animal}
                        key={pet.id}
                        name={pet.name}
                        breed={pet.breed}
                        images={pet.images}
                        location={`${pet.city}, ${pet.state}`}
                        id={pet.id} />
                )
            })}

        </div>
    );
};

export default SearchParams;