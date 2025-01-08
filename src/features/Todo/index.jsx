import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './compunents/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const inittodoList = [
        {
            id: 1,
            title: 'Vinh',
            status: 'new',
        },
        {
            id: 1,
            title: 'Binh',
            status: 'completed',
        },
        {
            id: 1,
            title: 'Cuong',
            status: 'new',
        },

    ];

    const [todoList, setTodoList] = useState(inittodoList);
    const handleTodoClick = (todo, idx) => {
        // clone ra mang moi
        const newTodoList = [...todoList];
        console.log(todo, idx);
        // toggle state
        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'complete' : 'new',
        };
        newTodoList[idx] = newTodo;
        //update todo list
        setTodoList(newTodoList);
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} onTodoClick={handleTodoClick} />
        </div>
    );
}

export default TodoFeature;