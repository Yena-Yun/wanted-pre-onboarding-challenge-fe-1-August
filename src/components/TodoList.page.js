import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { fetchData } from 'shared/api';

export const TodoListPage = () => {
  const { isLoading, data, isError, error } = useQuery(['data'], fetchData);
  const navigate = useNavigate();

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (isError) {
    return <h2>{error.message}</h2>;
  }

  const moveToDetail = (id) => {
    console.log(id);
    navigate(`todo/:${id}`);
  };

  return (
    <>
      <h2>TodoListPage</h2>
      {data?.data.map(({ id, title, content, createdAt, updatedAt }) => {
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
