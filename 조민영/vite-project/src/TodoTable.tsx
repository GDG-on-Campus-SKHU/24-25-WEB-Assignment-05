/* eslint-disable @typescript-eslint/no-unused-expressions */
import "./Todo.css";
import { useState } from "react";

//1. 인풋으로 입력한 내용이 todoText로 들어가야함--함수 연결해서 바뀐 값을 배열에 추가하fail.useState하기
//2. 속성과 체크박스 연결시키기--useState
//3. sum--useState그리고 어케 연결?
//4. 체크박스 모양 바꾸기--이건 이지
//5. 삭제 버튼을 계속 옆에 띄우는 법?--걍 넣어벌임
//6. 컴포넌트를 어떻게 쪼개지?--쪼개지말자..
let indexT = 1;
function TodoTable() {
  type Todos = { Id: number; todoText: string; isDone: boolean };
  const [Todo, setTodo] = useState<Todos[]>([]);
  const [todoText, setTodoText] = useState("");
  const tdList = Todo.map((Todo) => (
    <tr key={Todo.Id}>
      <td>
        <label htmlFor="chBox">
          <input
            type="checkbox"
            onChange={() => isitDone(Todo.Id)}
            checked={Todo.isDone}
            value={Todo.Id}
          />
        </label>
      </td>
      <td>
        <span id="span">{Todo.todoText}</span>
      </td>
      <td>
        <button onClick={() => decrease(Todo.Id)} value={Todo.Id} className="d">
          삭제
        </button>
      </td>
    </tr>
  ));

  const [sum, setSum] = useState(0);
  const increase = () => {
    setSum(sum + 1);
  };
  const decrease = (id) => {
    d(id);
    setSum(sum - 1);
  };
  const d = (id) => {
    setTodo(Todo.filter((t) => t.Id !== id));
  };
  const inputTodo = () => {
    if (todoText == "") {
      alert("등록할 일정을 입력해주세요!");
    } else {
      const newTodo: Todos = {
        Id: indexT,
        todoText: todoText,
        isDone: false,
      };
      setTodo([...Todo, newTodo]);
      increase();
      indexT += 1;
      setTodoText("");
    }
  };

  const isitDone = (id) => {
    setTodo(
      Todo.map((todo) =>
        todo.Id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
    setSum(sum - 1);
    Todo.map((todo) => (todo.isDone == false ? strikeLine() : nonStrike()));
  };

  const strikeLine = () => {
    const c = document.getElementById("span");
    c.style.textDecoration = "line-through";
  };

  const nonStrike = () => {
    const c = document.getElementById("span");
    c.style.textDecoration = "";
  };
  return (
    <div className="container">
      <div className="top">
        <p>TodoList</p>
      </div>
      <div className="mid">
        <input
          className="place"
          type="text"
          value={todoText}
          onChange={(t) => setTodoText(t.target.value)}
          name="todoText"
          placeholder="오늘의 할 일을 추가해보세요!"
        />
        <table>{tdList}</table>
      </div>
      <div className="bottom">
        <p>오늘의 할 일 {sum}</p>
        <button onClick={inputTodo}>추가하기</button>
      </div>
    </div>
  );
}

export default TodoTable;
