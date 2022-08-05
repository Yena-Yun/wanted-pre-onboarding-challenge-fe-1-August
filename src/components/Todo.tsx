import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from 'shared/api';
import { manageStatus } from 'shared/util';
import { TodoType } from 'shared/type';

type TodoId = {
  todoId: string | undefined;
};

type Id = {
  id: number;
};

export const Todo = () => {
  const { todoId } = useParams<TodoId>();

  const { isLoading, data, isError, error } = useQuery(['data'], fetchData);

  manageStatus({ isLoading, isError }, { error });

  const filterData = () => {
    return data?.data.filter(({ id }: Id) => id === parseInt(String(todoId)));
  };

  return (
    <>
      <h2>TodoPage</h2>
      {filterData().map(({ id, content, createdAt, updatedAt }: TodoType) => {
        return (
          <ul key={id}>
            <li>
              <p>{content}</p>
              <p>{String(createdAt)}</p>
              <p>{String(updatedAt)}</p>
            </li>
          </ul>
        );
      })}
    </>
  );
};
