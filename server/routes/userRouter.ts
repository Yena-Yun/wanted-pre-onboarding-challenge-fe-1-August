import express from 'express';
import * as controller from 'controllers/todoController';
import { validateToken } from 'middleware/validateToken';

export const router = express.Router();

// 토큰 존재 여부 검증 (middleware)
router.use(validateToken);

router.get('/', controller.getTodos);
router.post('/', controller.createTodo);
router.get('/:id', controller.getTodoById);
router.put('/:id', controller.updateTodo);
router.delete('/:id', controller.deleteTodo);
