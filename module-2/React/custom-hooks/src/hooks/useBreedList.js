import { useEffect, useState } from "react";

const localCache = {

};
function useBreedList(animal) {
    console.log('animal', animal);
    const [breedList, setBreedList] = useState([]);
    const [loadingStatus, setLoadingStatus] = useState(false)
    useEffect(() => {
        if (!animal) {
            setBreedList([]);
        } else if (localCache[animal]) {
            setBreedList(localCache[animal]);
        } else {
            requestBreedList()
        }
    }, [animal])

    async function requestBreedList() {
        setLoadingStatus(true)
        const res = await fetch(
            `http://pets-v2.dev-apis.com/breeds?animal=${animal}`
        );
        const json = await res.json();
        if (json.breeds) {
            localCache[animal] = json.breeds || [];
            setBreedList(localCache[animal]);
        }
        setLoadingStatus(false)
        console.log(json);
    }
    console.log('localCache', localCache);
    return [breedList, loadingStatus];
}

export default useBreedList