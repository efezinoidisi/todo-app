import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { useState } from 'react';
import GlobalStyles from './styles/global';
import Home from './components/Home';
import { TodosProvider } from './TodoContext';

function App() {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <TodosProvider>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className='App'>
          <Home toggle={toggleTheme} theme={theme} />
        </div>
      </ThemeProvider>
    </TodosProvider>
  );
}

export default App;
