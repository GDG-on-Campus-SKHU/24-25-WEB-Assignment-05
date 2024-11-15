import './Bottom.css';

type Props = {
  todoList: Todo[],
  onClick: () => void;
}

function Bottom({todoList, onClick}: Props) {
  const todayTasks = todoList.filter((todo) => !todo.isDone);

  return (
    <div className="bottom">
      <div className="todayTasksDiv">오늘 할 일 {todayTasks.length}</div>
      <div className="addTodoDiv" onClick={onClick}>추가하기</div>
    </div>
  )
}

export default Bottom