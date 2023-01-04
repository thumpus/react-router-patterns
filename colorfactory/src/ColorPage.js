import React from "react";
import { Link, useParams } from "react-router-dom"

function ColorPage({colors}){
    const { color } = useParams();

    return (
        <div style={{ backgroundColor: color }}>
            <h1>{color}</h1>    
            <Link to="/">Go back</Link> 
        </div>
    )
}

export default ColorPage;