import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { useState } from 'react';
import GlobalStyles from './styles/global';
import Home from './components/Home';

function App() {
	const [theme, setTheme] = useState('dark');
	const toggleTheme = () => {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	};

	return (
		<ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
			<GlobalStyles />
			<div className='App'>
				<Home toggle={toggleTheme} theme={theme} />
			</div>
		</ThemeProvider>
	);
}

export default App;

// const StyledDiv = styled.div`
//   display:flex;
//   color: red;
// `
