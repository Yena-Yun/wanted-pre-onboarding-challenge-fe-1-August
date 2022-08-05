import { Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from 'shared/api';
import { TodoType } from 'shared/type';
import { manageStatus } from 'shared/util';

export const TodoList = () => {
  const { isLoading, data, isError, error } = useQuery(['data'], fetchData);

  manageStatus({ isLoading, isError }, { error });

  return (
    <>
      <h2>TodoListPage</h2>
      {data?.data.map(({ id, title }: TodoType) => {
        return (
          <ul key={id}>
            <li>
              <Link to={`/todo/${id}`}>
                <h3>{title}</h3>
              </Link>
            </li>
          </ul>
        );
      })}
    </>
  );
};
