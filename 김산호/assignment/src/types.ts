export type Todo = {
  id: number,
  todoText: string,
  isDone: boolean
};

export type AddTodoFunc = (text: string) => void;
export type ToggleTodoFunc = (id: number) => void;
export type DeleteTodoFunc = (id: number) => void;