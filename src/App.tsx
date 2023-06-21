import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/theme';
import { useState } from 'react';
import GlobalStyles from './styles/global';
import Home from './components/Home';
// import darkImg from './assets/bg-mobile-dark.jpg';
// import lightImg from './assets/bg-mobile-light.jpg';
// import desktopDarkImg from './assets/bg-desktop-dark.jpg';

// import desktopLightImg from './assets/bg-desktop-light.jpg';
import { ValuesProvider } from './ValuesContext';
function App() {
	const [dark, setTheme] = useState('dark');
	const toggleTheme = () => {
		dark === 'dark' ? setTheme('light') : setTheme('dark');
	};

	// const styles = {
	// 	body: dark === 'dark' ? '#000' : '#fffff',
	// 	text: '',
	// 	border: 'red',
	// 	background: 'red',
	// };
	// tslint:disable-next-line
	return (
		<DndProvider backend={HTML5Backend}>
			<ValuesProvider>
				<ThemeProvider theme={dark === 'dark' ? darkTheme : lightTheme}>
					<GlobalStyles />
					<div className='App'>
						<Home toggle={toggleTheme} dark={dark} />
					</div>
				</ThemeProvider>
			</ValuesProvider>
		</DndProvider>
	);
}

export default App;

// const StyledDiv = styled.div`
//   display:flex;
//   color: red;
// `
// values={styles}
// 				url={dark === 'dark' ? darkImg : lightImg}
// 				desktop={dark === 'dark' ? desktopDarkImg : desktopLightImg}
