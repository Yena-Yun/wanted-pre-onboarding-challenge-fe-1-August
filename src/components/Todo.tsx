import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTodoById } from 'shared/api';
import { manageStatus } from 'shared/util';

export const Todo = () => {
  const { todoId } = useParams();

  const { status, data, error } = useQuery({
    queryKey: ['data', String(todoId)],
    queryFn: () => getTodoById(String(todoId)),
  });

  manageStatus({ status }, { error });

  const { content, createdAt, updatedAt } = data;

  return (
    <>
      <h2>Todo</h2>
      <p>{content}</p>
      <p>{createdAt}</p>
      <p>{updatedAt}</p>
    </>
  );
};
