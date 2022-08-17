import path from 'path';
import { Low, JSONFile } from 'lowdb';
import fs from 'fs/promises';
import { nanoid } from 'nanoid';
import { Todo } from 'types/todos';
import { User } from 'types/users';

export interface Data {
  todos: Todo[];
  users: User[];
}

export let db: Low<Data>;

const __dirname = path.resolve();

export const initDB = async () => {
  const dbFolderPath = path.join(__dirname, './db');
  const filePath = path.join(__dirname, './db/db.json');

  const dbFolder = await fs.readdir(dbFolderPath).catch(() => void 0);
  const file = await fs.readFile(filePath).catch(() => void 0);

  if (!dbFolder) {
    await fs.mkdir(dbFolderPath);
  }

  if (!file) {
    await fs.writeFile(filePath, JSON.stringify({ todos: [], users: [] }));
  }

  return filePath;
};

export const createConnection = async () => {
  const filePath = await initDB();

  const adapter = new JSONFile<Data>(filePath);
  db = new Low<Data>(adapter);

  // db를 읽어냄 => db.data가 됨
  await db.read();

  // 파일이 없을 경우 db.data가 null이 되는 경우를 대비해서 default 값을 설정 (||= 은 +=, -=과 비슷)
  db.data ||= { todos: [], users: [] };

  // db.data를 db에 저장(기록)
  await db.write();
};

export const getConnection = () => db;

export const create = <T>(content: any): T => {
  const timestamp = new Date().toISOString();

  return {
    ...content,
    id: nanoid(),
    createdAt: timestamp,
    updatedAt: timestamp,
  };
};

export const update = <T>(content: any): T => {
  const timestamp = new Date().toISOString();

  return {
    ...content,
    updatedAt: timestamp,
  };
};
