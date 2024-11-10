import React, {useState} from "react";
import type { Todo, AddTodoFunc, ToggleTodoFunc, DeleteTodoFunc } from './types';
import TodoList from "./TodoList";
import './TodoContainer.css';
import Header from "./Header";
import TodoInput from "./TodoInput";
import Bottom from "./Bottom";

function TodoContainer() {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [todoText, setTodoText] = useState<string>('');

  const onClick = () => {
    if (todoText.trim() === '') {
      alert('등록할 일정을 입력해주세요!');
    } else {
      addTodo(todoText);
      setTodoText('');
    }
  };

  const addTodo: AddTodoFunc = (todoText: string) => {
    const lastIndex = todoList.length - 1;
    const lastId = lastIndex == -1 ? 0 : todoList[lastIndex].id;
    const todo = {id: lastId + 1, todoText: todoText, isDone: false};
    setTodoList([...todoList, todo]);
  }

  const toggleTodo: ToggleTodoFunc = (id: number) => {
    const newTodoList = todoList.map(
      todo => todo.id !== id ? todo : {...todo, isDone: !todo.isDone}
    );
    setTodoList(newTodoList);
  }

  const deleteTodo: DeleteTodoFunc = (id: number) => {
    setTodoList( todoList.filter(todo => todo.id !== id));
  }

  return (
    <div className="TodoContainer">
      <Header/>
      <TodoInput todoText={todoText} setTodoText={setTodoText} />
      <TodoList todoList={todoList} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      <Bottom todoList={todoList} onClick={onClick} />
    </div>
  )


}

export default TodoContainer;