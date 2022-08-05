import axios from 'axios';
import { useState, useEffect } from 'react';

export const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/data').then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <h2>LoginPage</h2>
      {data.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>
              <h3>{todo.title}</h3>
              <p>{todo.content}</p>
              <span>{todo.createdAt}</span>
              <span>{todo.updatedAt}</span>
            </li>
          </ul>
        );
      })}
    </>
  );
};
