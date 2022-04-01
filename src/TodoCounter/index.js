import React from "react";
import { TodoContext } from "../TodoContext";
import './TodoCounter.css';

function TodoCounter() {
    const { totalTodos, completedTodos } = React.useContext(TodoContext);

    return (
        <h2 className="TodoCounter">Has completado {completedTodos} de {totalTodos} TODOs</h2>
    );
}

/*
* Este tipo de export obliga a tener que utilizar especificamente
* este nombre a la hora de importarlo en otro archivo.
*/
export { TodoCounter };