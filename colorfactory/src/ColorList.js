import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewColorForm from './NewColorForm';

function ColorList ({initialColors}) {
    const [colors, setColors] = useState(initialColors)

    const create = newColor => {
    setColors(colors => [...colors, newColor])
     };

    const links = colors.map(color => (
        <li>
            <Link to={`/colors/${color}`}>{color}</Link>
        </li>
    ))
    return (
        <div>
            {links}
            <NewColorForm addColor = {create}/>
        </div>
    )
}
export default ColorList;