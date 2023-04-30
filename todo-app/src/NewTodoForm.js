import React, { useState } from "react";

const NewTodoForm = ({ addTodo }) => {
    const [todo, setTodo] = useState("");
    const handleChange = (e) => {
        setTodo(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todo);
        setTodo("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="todoItem">Todo Item </label>
            <input
                id="todoItem"
                type="text"
                name="todoItem"
                value={todo}
                placeholder="Todo Item"
                onChange={handleChange}
            />
            <button>Add Todo</button>
        </form>
    );
};

export default NewTodoForm;
