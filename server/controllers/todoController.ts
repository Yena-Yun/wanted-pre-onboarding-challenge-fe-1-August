import type { Request, Response } from 'express';
import { StatusCodes as Status } from 'http-status-codes';
import * as todoService from 'services/todoService';
import { TODO_VALIDATION } from 'utils/validator';
import type { TodoInput } from 'types/todos';

export const createTodo = async (req: Request, res: Response) => {
  const { title, content }: TodoInput = req.body;

  if (title) {
    const todo = await todoService.createTodo({ title, content });
    return res.status(Status.OK).send(todo);
  } else {
    return res.status(Status.BAD_REQUEST).send(TODO_VALIDATION.INVALID_VALUE);
  }
};

export const getTodos = (req: Request, res: Response) => {
  const { countOnly } = req.query;

  const todos = todoService.findTodos();

  if (todos) {
    if (countOnly) {
      return res.status(Status.OK).send(todos.length);
    }
    return res.status(Status.OK).send(todos);
  } else {
    return res.status(Status.BAD_REQUEST).send(TODO_VALIDATION.NOT_FOUND);
  }
};

export const getTodoById = (req: Request, res: Response) => {
  const { id: todoId } = req.params;

  const todo = todoService.findTodo((todo) => todo.id === todoId);

  if (todo) {
    return res.status(Status.OK).send(todo);
  } else {
    return res.status(Status.BAD_REQUEST).send(TODO_VALIDATION.NOT_FOUND);
  }
};

export const updateTodo = async (req: Request, res: Response) => {
  const { id: todoId } = req.params;
  const { title, content }: TodoInput = req.body;

  const todo = todoService.findTodo((todo) => todo.id === todoId);

  if (todo) {
    await todoService.updateTodo(todo, { title, content });
    return res.status(Status.OK).send(todo);
  } else {
    return res.status(Status.BAD_REQUEST).send(TODO_VALIDATION.NOT_FOUND);
  }
};

export const deleteTodo = async (req: Request, res: Response) => {
  const { id: todoId } = req.params;

  const todo = todoService.findTodo((todo) => todo.id === todoId);

  if (todo) {
    await todoService.deleteTodo(todo);
    return res.status(Status.OK).send(null);
  } else {
    return res.status(Status.BAD_REQUEST).send(TODO_VALIDATION.NOT_FOUND);
  }
};
