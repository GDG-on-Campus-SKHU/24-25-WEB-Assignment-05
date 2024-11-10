import React, { useState } from "react";
import "./App.css";

type TodoList = {
  id: number;
  todoText: string;
  isDone: boolean;
};

function App() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const [itemList, setItemList] = useState([] as TodoList[]);

  const InputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const AddItem = () => {
    if (inputValue.trim()) {
      const newItem: TodoList = {
        id: itemList.length + 1,
        todoText: inputValue,
        isDone: false,
      };
      setItemList([...itemList, newItem]);
      setInputValue("");
      setCount(count + 1);
    } else {
      alert("등록할 일정을 입력해주세요!");
    }
  };

  const DeleteItem = (id: number) => {
    const updatedList = itemList.filter((_, idx) => idx !== id);
    setItemList(updatedList);
    setCount(count - 1);
  };

  const BoxChecked = (id: number) => {
    const updatedList = itemList.map((item, idx) => {
      if (idx === id) {
        item.isDone = !item.isDone;
      }
      return item;
    });

    setItemList(updatedList);

    if (updatedList[id].isDone) {
      setCount(count - 1);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="container">
        <div className="title">TodoList</div>
        <div className="sentence">
          <input type="text" value={inputValue} onChange={InputChange} placeholder="오늘 할 일을 추가해보세요!" />
          <ul>
            {itemList.map((item, id) => (
              <li key={id}>
                <input type="checkbox" className="checkbox" checked={item.isDone} onChange={() => BoxChecked(id)} />
                <p
                  className="text"
                  style={{
                    textDecoration: item.isDone ? "line-through" : "none",
                    textDecorationColor: item.isDone ? "black" : "transparent",
                  }}
                >
                  {item.todoText}
                </p>
                <button onClick={() => DeleteItem(id)}>삭제</button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bottom">
          <p className="today">오늘 할 일 {count}</p>
          <p className="add" onClick={AddItem}>
            추가하기
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
