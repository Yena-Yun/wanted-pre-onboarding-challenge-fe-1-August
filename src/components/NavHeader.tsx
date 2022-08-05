import { Link } from 'react-router-dom';

export const NavHeader = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/todos'>TodoList</Link>
        </li>
      </ul>
    </nav>
  );
};
