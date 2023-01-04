import React from "react";
import { Link } from "react-router-dom";

function DogList({dogs}) {
    return(
        <div>
            <h1>Welcome to the DogZone</h1>
            <h2>here are the dogs:</h2>
            {dogs.map(dog => (
                <div>
                <Link to={`/dogs/${dog.name.toLowerCase()}`}><h3>{dog.name}</h3><img src={dog.src} alt={dog.name} /></Link>
                </div>
            ))}
        </div>
    )
}

export default DogList;