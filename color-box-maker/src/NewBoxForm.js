import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        backgroundColor: "red",
        height: "100",
        width: "100",
    };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="backgroundColor">Background Color</label>
            <input
                id="backgroundColor"
                type="text"
                name="backgroundColor"
                placeholder="Background Color"
                value={formData.backgroundColor}
                onChange={handleChange}
            />
            <label htmlFor="height">Height in pixels:{formData.height}</label>
            <input
                id="height"
                type="range"
                name="height"
                min="100"
                max="500"
                step="100"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="width">Width in pixels:{formData.width}</label>
            <input
                id="width"
                type="range"
                name="width"
                min="100"
                max="500"
                step="100"
                value={formData.width}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    );
};

export default NewBoxForm;
