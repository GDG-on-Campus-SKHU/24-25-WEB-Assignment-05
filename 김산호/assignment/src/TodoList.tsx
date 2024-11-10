import React from 'react'
import type { Todo, ToggleTodoFunc, DeleteTodoFunc } from './types'
import './TodoList.css';

type Props = {
  todoList: Todo[],
  toggleTodo: ToggleTodoFunc,
  deleteTodo: DeleteTodoFunc
};

function TodoList({todoList, toggleTodo, deleteTodo}: Props) {
  const confirmDelete = (todo: Todo) => {
    deleteTodo(todo.id);
  };

  const trList = todoList.map(todo => (
    <div className="todo" key={todo.id}>
      <label className="checkboxContainer">
        <input
          className="chk"
          type="checkbox"
          checked={todo.isDone}
          onChange={() => toggleTodo(todo.id)}
        />
        <i className='circle'></i>
      </label>
      <span className={todo.isDone ? 'done' : ''}>
        {todo.todoText}
      </span>
      <span className='delete' onClick={() => confirmDelete(todo)}>삭제</span>
    </div>
  ));

  return (
    <div className='todoListWrapper'>
      {trList}
    </div>
  )
}

export default TodoList;