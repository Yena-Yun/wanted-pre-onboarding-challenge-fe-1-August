export interface TodoType {
  id: number;
  title: string;
  content: string | string[];
  createdAt: string;
  updatedAt: string;
}

export type UserInfo = {
  email: string;
  password: string;
};
