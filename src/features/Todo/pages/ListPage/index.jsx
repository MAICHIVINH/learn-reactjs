import React, { useState } from 'react';
import TodoList from '../../compunents/TodoList';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

ListPage.propTypes = {
    
};

function ListPage(props) {
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
    const location = useLocation();

    const [todoList, setTodoList] = useState(initTodoList);
    const [filteredStatus, setFilteredStatus] = useState(() =>{
        const params = queryString.parse(location.search);

        // console.log(params);

        return params.status || 'all';
    });

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

    const renderedTodoList = todoList.filter(todo => filteredStatus === 'all'|| filteredStatus === todo.status);
    
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

export default ListPage;