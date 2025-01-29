const Pet = (props) => {

    const { name, animal, breed, images, location, id } = props;

    let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
    if (images.length) {
        hero = images[0];
    }

    return (
        <>
            <a href={`/details/${id}`} className="pet">
                <div className="image-container">
                    <img src={hero} alt={name} />
                </div>
                <div className="info">
                    <h1>{name}</h1>
                    <h2>{`${animal} — ${breed} — ${location}`}</h2>
                </div>
            </a>
        </>
    );
};

export default Pet;



// function Pet(props) {
//     console.log(props.name, props.animal)
//     return (
//         <div>
//             <h1>I am a component {props.name}</h1>
//         </div>
//     )
// }

// export default Pet

