import React, { useState, ChangeEvent, FormEvent } from "react";
import "./App.css";

type Todo = {
  id: number;
  todoText: string;
  isDone: boolean;
};

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [inputText, setInputText] = useState("");

  const addTodo = (e: FormEvent) => {
    e.preventDefault();
    if (inputText.trim() === "") {
      alert("등록할 일정을 입력해주세요!");
      return;
    }
    const newTodo: Todo = {
      id: Date.now(),
      todoText: inputText,
      isDone: false,
    };
    setTodos([...todos, newTodo]);
    setInputText("");
  };

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const remainingTodos = todos.filter((todo) => !todo.isDone).length;

  return (
    <div id="root">
      <div className="container">
        <div className="title">TodoList</div>
        <form onSubmit={addTodo} className="sentence">
          <input
            type="text"
            value={inputText}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setInputText(e.target.value)
            }
            placeholder="오늘의 할 일을 추가해보세요!"
          />
          <ul>
            {todos.map((todo) => (
              <li key={todo.id} className={todo.isDone ? "good" : ""}>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={todo.isDone}
                  onChange={() => toggleTodo(todo.id)}
                />
                <span className="text">{todo.todoText}</span>
                <button onClick={() => deleteTodo(todo.id)}>삭제</button>
              </li>
            ))}
          </ul>
        </form>
        <div className="bottom">
          <div className="today">오늘 할 일 {remainingTodos}</div>
          <div className="add" onClick={addTodo}>
            추가하기
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
