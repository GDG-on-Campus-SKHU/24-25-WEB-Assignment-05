type Todo = {
  id: number,
  todoText: string,
  isDone: boolean
};

type AddTodoFunc = (text: string) => void;
type ToggleTodoFunc = (id: number) => void;
type DeleteTodoFunc = (id: number) => void;