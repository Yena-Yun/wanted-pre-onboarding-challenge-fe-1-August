import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getTodos } from 'api';
import { TodoType } from 'shared/type';
import { manageStatus } from 'shared/util';

export const TodoList = () => {
  const navigate = useNavigate();
  const { status, data, error } = useQuery(['data'], getTodos);

  manageStatus({ status, error });

  return (
    <>
      <h2>TodoList</h2>
      <ul>
        {data?.map(({ id, title }: TodoType) => {
          return (
            <li key={id} onClick={() => navigate(`/todo/${id}`)}>
              {title}
            </li>
          );
        })}
      </ul>
    </>
  );
};
