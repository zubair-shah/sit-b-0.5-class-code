import { useState } from "react";
const ANIMALS = ["Select Animal", "bird", "cat", "dog", "rabbit", "reptile"];
const SearchParams = () => {
    const [location, setLocation] = useState('')
    const [animal, setAnimal] = useState('')
    // const locationChange = (event) => {
    //     // location += event.target.value
    //     // console.log(event.target.value)
    //     setLocation(event.target.value)
    // }
    console.log(location)
    console.log(animal)

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
                <button>Submit</button>
            </form>
        </div>
    );
};

export default SearchParams;