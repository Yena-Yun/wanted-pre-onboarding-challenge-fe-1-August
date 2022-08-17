import { create, db } from 'models/db';
import type { User, UserInput } from 'types/users';

export const createUser = async ({ email, password }: UserInput) => {
  // 새로운 user 생성
  const newUser = create<User>({ email, password });

  // db에 저장(기록)
  db.data?.users.push(newUser);
  await db.write();

  // 새로운 user 반환
  return newUser;
};

export const findUser = (predicate: (user: User) => boolean) => {
  return db.data?.users.find(predicate);
};
