import validator from 'validator';
import { UserInput } from 'types/users';

export const userValidator = ({ email, password }: UserInput) => {
  if (validator.isEmpty(email) || validator.isEmpty(password)) {
    return {
      isValid: false,
      message: USER_VALIDATION.EMPTY_INPUT,
    };
  }

  if (!validator.isEmail(email)) {
    return {
      isValid: false,
      message: USER_VALIDATION.INVALID_EMAIL,
    };
  }

  if (!validator.isLength(password, { min: 8 })) {
    return {
      isValid: false,
      message: USER_VALIDATION.INVALID_PASSWORD,
    };
  }

  return { isValid: true };
};

export const TODO_VALIDATION = {
  NOT_FOUND: 'todo를 찾는 도중 문제가 발생했습니다.',
  INVALID_VALUE: '입력란을 다시 확인해주세요.',
};

export const USER_VALIDATION = {
  EMPTY_INPUT: '이메일/비밀번호 값이 비어있습니다.',
  INVALID_EMAIL: '이메일 형식에 맞게 입력해주세요.',
  INVALID_PASSWORD: '비밀번호 길이는 8 이상이어야 합니다.',
  NOT_FOUND_USER: '유저가 없어 로그인에 실패했습니다.',
  EXIST_USER: '이미 존재하는 유저입니다.',
};
