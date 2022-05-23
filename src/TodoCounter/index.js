import React from "react";
import './TodoCounter.css';

function TodoCounter({ totalTodos, completedTodos, loading }) {
    return (
        <h2
            className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}
        >
            Has completado {completedTodos} de {totalTodos} TODOs
        </h2>
    );
}

/*
* Este tipo de export obliga a tener que utilizar especificamente
* este nombre a la hora de importarlo en otro archivo.
*/
export { TodoCounter };