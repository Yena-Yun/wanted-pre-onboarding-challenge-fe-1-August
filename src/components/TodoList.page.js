import { useQuery } from '@tanstack/react-query';
import { fetchData } from 'shared/api';

export const TodoListPage = () => {
  const { isLoading, data, isError, error } = useQuery(['data'], fetchData);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>TodoListPage</h2>
      {data?.data.map(({ id, title, content, createdAt, updatedAt }) => {
        return (
          <ul key={id}>
            <li>
              <h3>{title}</h3>
              <p>{content}</p>
              <span>{createdAt}</span>
              <span>{updatedAt}</span>
            </li>
          </ul>
        );
      })}
    </>
  );
};
