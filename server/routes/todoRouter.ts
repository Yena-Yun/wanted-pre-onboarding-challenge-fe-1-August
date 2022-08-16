import express from 'express';
import * as controller from 'controllers/todoController';
import { validateToken } from 'middleware/validateToken';

// 라우터 생성
export const router = express.Router();

// 미들웨어로 토큰 존재 여부 검증
router.use(validateToken);

// 특정 경로의 API 메서드 실행
router.get('/', controller.getTodos);
router.post('/', controller.createTodo);
router.get('/:id', controller.getTodoById);
router.put('/:id', controller.updateTodo);
router.delete('/:id', controller.deleteTodo);
