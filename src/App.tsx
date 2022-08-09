import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from 'styled-components';
import { Home, Login, SignUp, TodoList, Todo, NavHeader } from 'components';
import { theme } from 'styles/theme';
import { GlobalStyle } from 'styles/global';

function App() {
  const queryClient = new QueryClient();

  axios.defaults.baseURL = 'http://localhost:8080';
  axios.defaults.withCredentials = true;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <NavHeader />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<SignUp />} />
              <Route path='/todos' element={<TodoList />} />
              <Route path='/todo/:todoId' element={<Todo />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
