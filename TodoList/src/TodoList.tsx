import React, { useState } from 'react';
import './TodoList.css';

type Todo = {
  id: number;
  todoText: string;
  isDone: boolean;
};

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = (): void => {
    if (input.trim() === "") {
      alert("등록할 일정을 입력해주세요!");
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      todoText: input,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const toggleTodo = (id: number): void => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const remainingTodos: number = todos.filter((todo) => !todo.isDone).length;

  return (
    <div className="container">
      <h1>TodoList</h1>
      <div className="todo-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="오늘 할 일을 추가해보세요!"
        />
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isDone ? "done" : ""}>
            <label className="circle-checkbox">
              <input
                type="checkbox"
                checked={todo.isDone}
                onChange={() => toggleTodo(todo.id)}
              />
              <span className="checkmark"></span>
            </label>
            <span>{todo.todoText}</span>
            <button onClick={() => deleteTodo(todo.id)} className="delete-btn">
              삭제
            </button>
          </li>
        ))}
      </ul>
      <footer>
        <span>오늘 할 일 {remainingTodos}</span>
        <button onClick={addTodo} className="footer-add-btn">추가하기</button>
      </footer>
    </div>
  );
};

export default TodoList;
