import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const INITIAL_STATE = {
        todo: "",
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
        addTodo({ ...formData });
        setFormData(INITIAL_STATE);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">Todo Item </label>
            <input
                type="text"
                name="todo"
                placeholder="Todo Item"
                value={formData.todo}
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodoForm;
