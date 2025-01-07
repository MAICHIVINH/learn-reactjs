import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './compunents/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            title: 'Vinh'
        },
        {
            id: 1,
            title: 'Binh'
        },
        {
            id: 1,
            title: 'Cuong'
        },

    ]
    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={todoList} />
        </div>
    );
}

export default TodoFeature;