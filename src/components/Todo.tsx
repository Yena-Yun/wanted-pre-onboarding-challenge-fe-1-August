import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTodoById } from 'api';
import { manageStatus } from 'shared/util';

export const Todo = () => {
  const { todoId } = useParams();
  const { status, data, error } = useQuery({
    queryKey: ['data', String(todoId)],
    queryFn: () => getTodoById(String(todoId)),
  });
  const { content, createdAt, updatedAt } = data;

  manageStatus({ status, error });

  return (
    <>
      <h2>Todo</h2>
      <p>{content}</p>
      <p>{createdAt}</p>
      <p>{updatedAt}</p>
    </>
  );
};
