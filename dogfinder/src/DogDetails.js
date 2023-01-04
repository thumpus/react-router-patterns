import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";


function DogDetails({dogs}) {
    const { name } = useParams()
    const currDog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());

    if (!currDog) return <Redirect to="/dogs" />
    return(
        <div>
            <h1>{currDog.name}, Age {currDog.age}</h1>
            <img src = {currDog.src} />
            <p>
                {currDog.facts}
            </p>
        </div>
    )
    
}

export default DogDetails;