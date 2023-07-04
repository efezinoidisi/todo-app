import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { useState } from 'react';
import GlobalStyles from './styles/global';
import Home from './components/Home';
import { TodosProvider } from './TodoContext';

function App () {
  const [dark, setTheme] = useState('dark');
  const toggleTheme = () => {
    dark === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <TodosProvider>
      <ThemeProvider theme={dark === 'dark' ? darkTheme : lightTheme}>
        <GlobalStyles />
        <div className='App'>
          <Home toggle={toggleTheme} dark={dark} />
        </div>
      </ThemeProvider>
    </TodosProvider>
  );
}

export default App;
