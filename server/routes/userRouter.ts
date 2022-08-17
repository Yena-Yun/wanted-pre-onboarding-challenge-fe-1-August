import express from 'express';
import * as controller from 'controllers/authController';
import { validateToken } from 'middleware/validateToken';

export const router = express.Router();

// 토큰 존재 여부 검증 (middleware)
router.use(validateToken);

router.post('/signup', controller.signUp);
router.post('/login', controller.login);
