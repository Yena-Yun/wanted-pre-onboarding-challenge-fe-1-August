export interface TodoType {
  id: number;
  title: string;
  content: string | string[];
  createdAt: string;
  updatedAt: string;
}

export type UserInfoType = {
  email: string;
  password: string;
};
