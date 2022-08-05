import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchData } from 'shared/api';

export const TodoPage = () => {
  const { todoId } = useParams();

  const { isLoading, data, isError, error } = useQuery(['data'], fetchData);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  return (
    <>
      <h2>TodoPage</h2>
      {data?.data.map(({ id, content, createdAt, updatedAt }) => {
        if (id === parseInt(todoId))
          return (
            <div key={id}>
              <p>{content}</p>
              <p>{createdAt}</p>
              <p>{updatedAt}</p>
            </div>
          );
      })}
    </>
  );
};
