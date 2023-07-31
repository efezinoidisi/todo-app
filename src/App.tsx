import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './styles/global';
import Home from './components/Home';
import { TodosProvider } from './TodoContext';
import SignUp from './pages/SignUp';

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <main className='App'>
      <TodosProvider>
        <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
          <GlobalStyles />
          <Routes>
            <Route
              index
              element={<Home toggle={toggleTheme} theme={theme} />}
            />
            <Route path='signup' element={<SignUp />} />
          </Routes>
        </ThemeProvider>
      </TodosProvider>
    </main>
  );
}

export default App;
