import { Routes, Route, Link } from 'react-router-dom';
import { HomePage, LoginPage, TodoListPage } from './components';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li>
          <li>
            <Link to='/todolist'>TodoList</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/todolist' element={<TodoListPage />} />
      </Routes>
    </>
  );
}

export default App;
