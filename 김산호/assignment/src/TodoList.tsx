import React from 'react'
import './TodoList.css';

type Props = {
  todoList: Todo[],
  toggleTodo: ToggleTodoFunc,
  deleteTodo: DeleteTodoFunc
};

function TodoList({todoList, toggleTodo, deleteTodo}: Props) {
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
      <span className='delete' onClick={() => deleteTodo(todo.id)}>삭제</span>
    </div>
  ));

  return (
    <div className='todoListWrapper'>
      {trList}
    </div>
  )
}

export default TodoList;