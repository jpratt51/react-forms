import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
    const INITIAL_STATE = [
        { id: uuid(), todo: "mow yard" },
        { id: uuid(), todo: "dishes" },
    ];
    const [todos, setTodos] = useState(INITIAL_STATE);
    const addTodo = (newTodo) => {
        setTodos((todos) => [...todos, { ...newTodo, id: uuid() }]);
    };
    const deleteTodo = (id) => {
        setTodos((todos) => todos.filter((box) => box.id !== id));
    };
    return (
        <div>
            <h3>Todos</h3>
            <NewTodoForm addTodo={addTodo} />
            {todos.map(({ id, todo }) => (
                <div key={id}>
                    <div id={id}>{todo}</div>
                    <button onClick={() => deleteTodo(id)}>X</button>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
