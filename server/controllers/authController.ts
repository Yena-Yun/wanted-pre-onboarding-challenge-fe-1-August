import type { Request, Response } from 'express';
import { StatusCodes as Status } from 'http-status-codes';
import * as userService from 'services/userService';
import { userValidator, USER_VALIDATION } from 'utils/validator';
import { createToken } from 'utils/authUtils';
import type { UserInput } from 'types/users';

export const signUp = async (req: Request, res: Response) => {
  const { email, password }: UserInput = req.body;
  const { isValid, message } = userValidator({ email, password });

  if (!isValid) {
    return res.status(Status.BAD_REQUEST).send(message);
  }

  // 기존에 있는 유저인지 확인
  const existUser = userService.findUser((user) => user.email === email);

  if (existUser) {
    // 기존에 유저가 있다면 '충돌'
    return res.status(Status.CONFLICT).send(USER_VALIDATION.EXIST_USER);
  } else {
    // 기존에 없으면 새로운 유저로 등록하고
    await userService.createUser({ email, password });
    //  JWT 토큰 반환
    return res.status(Status.OK).send({
      token: createToken(email),
      message: '계정이 성공적으로 생성되었습니다.',
    });
  }
};

export const login = async (req: Request, res: Response) => {
  const { email, password }: UserInput = req.body;
  const { isValid, message } = userValidator({ email, password });

  if (!isValid) {
    return res.status(Status.BAD_REQUEST).send(message);
  }

  const matchedUser = userService.findUser(
    (user) => user.email === email && user.password === password
  );

  if (!matchedUser) {
    return res.status(Status.BAD_REQUEST).send(USER_VALIDATION.NOT_FOUND_USER);
  } else {
    // 로그인할 때도 JWT 토큰 반환
    return res.status(Status.OK).send({
      token: createToken(email),
      message: '로그인에 성공하였습니다.',
    });
  }
};
