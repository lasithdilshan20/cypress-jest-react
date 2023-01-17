import React from 'react';

function Todo({todo}) {
    const {id, title, completed} = todo;
    return (
        <div data-testid="todo-1">{ title }</div>
    )
}

export default Todo;