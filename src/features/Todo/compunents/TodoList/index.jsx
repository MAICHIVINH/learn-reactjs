import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './styles.scss';

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired,
    onTodoClick: PropTypes.func.isRequired,
};

TodoList.defaultProps = {
    todoList: [],
    onTodoClick: null,
}

function TodoList(props) {

    const { todoList, onTodoClick } = props;

    const handleTodoClick = (todo, idx) => {

        if (!onTodoClick) return;

        onTodoClick(todo, idx);
    }
    
    return (
        <ul className="todo-list" >
            
            {/* Khi render List phải chỉ định key */}
            {todoList.map((todo, idx) => (

                <li key={todo.id} 
                
                className={classNames({

                    'todo-item': true,

                    completed: todo.status === 'completed' 

                })} 

                onClick={() => handleTodoClick(todo, idx)}
                >

                    {todo.title}
                </li>
            ))}

        </ul>
    );
}

export default TodoList;