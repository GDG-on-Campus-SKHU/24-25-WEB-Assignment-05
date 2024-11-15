import './TodoInput.css'

type Props = {
  todoText: string,
  setTodoText: (title: string) => void
}

function TodoInput({todoText, setTodoText}: Props) {
  return (
    <input className="todoInput" type="text" placeholder="오늘 할 일을 추가해보세요!" 
      value={todoText} onChange={e => setTodoText(e.target.value)} />
  )
}

export default TodoInput