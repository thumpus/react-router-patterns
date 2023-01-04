import React, { useState } from "react";

function NewColorForm ({ addColor }){
    const [formData, setFormData] = useState("");

    const handleChange = evt => {
        setFormData(evt.target.value);
    }

    const gatherInput = evt => {
        evt.preventDefault();
        addColor( formData );
        setFormData("")
    }

    return (
        <div>
            <form onSubmit={gatherInput}>
                <label htmlFor="color">Add a new color:</label>
                <input 
                    id="color"
                    name="color"
                    type="text"
                    onChange={handleChange}
                    value={formData}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewColorForm;