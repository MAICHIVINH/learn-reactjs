import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TodoList from './compunents/TodoList';

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const initTodoList = [
        {
            id: 1,
            title: 'Vinh',
            status: 'new',
        },
        {
            id: 2,
            title: 'Binh',
            status: 'completed',
        },
        {
            id: 3,
            title: 'Cuong',
            status: 'new',
        },

    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const [filteredStatus, setFilteredStatus] = useState('all');

    const handleTodoClick = (todo, idx) => {

        // clone ra mang moi
        const newTodoList = [...todoList];
        console.log(todo, idx);

        // toggle state
        newTodoList[idx] = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
        };

        
        //update todo list
        setTodoList(newTodoList);
    }
    const handleShowAllClick = () => {
        setFilteredStatus('all');
    }
    const handleShowCompletedClick = () => { 
        setFilteredStatus('completed');
    }
    const handleShowNewClick = () => {
        setFilteredStatus('new');
    }

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all'
        || filteredStatus === todo.status);
    
    // console.log(renderedTodoList);

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />

            <div>
            <button onClick={handleShowAllClick} >Show All</button>
            <button onClick={handleShowCompletedClick} >Show Completed</button>
            <button onClick={handleShowNewClick} >Show New</button>
            </div>
        </div>
    );
}

export default TodoFeature;