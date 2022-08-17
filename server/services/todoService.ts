import { create, Data, db, update } from 'models/db';
import type { Todo, TodoInput } from 'types/todos';

export const createTodo = async ({ title, content }: TodoInput) => {
  // 새로운 todo 생성
  const newTodo = create<Todo>({ title, content });

  // db에 저장(기록)
  db.data?.todos.push(newTodo);
  await db.write();

  // 새로운 todo 반환
  return newTodo;
};

export const findTodos = () => {
  return db.data?.todos;
};

export const findTodo = (predicate: (todo: Todo) => boolean) => {
  return db.data?.todos.find(predicate);
};

export const updateTodo = async (todo: Todo, todoValue: Partial<Todo>) => {
  Object.assign(todo, update<Todo>({ ...todo, ...todoValue }));

  await db.write();

  return todo;
};

export const deleteTodo = async (todoToDelete: Todo) => {
  const filteredTodos = db.data?.todos.filter(
    (todo) => todo.id !== todoToDelete.id
  )!;

  (db.data as Data).todos = filteredTodos;

  await db.write();

  return todoToDelete;
};
