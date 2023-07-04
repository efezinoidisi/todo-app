import darkImg from '../assets/bg-mobile-dark.jpg';
import lightImg from '../assets/bg-mobile-light.jpg';
import desktopDarkImg from '../assets/bg-desktop-dark.jpg';

import desktopLightImg from '../assets/bg-desktop-light.jpg';
//import { DefaultTheme } from 'styled-components';

interface Theme {
	colors: {
		body: string;
		mainBg: string;
		text: string;
		border: string;
		background: string;
		blur: string;
		faint: string;
		btn: string;
	};
	pictures: {
		mobile: string;
		desktop: string;
	};
}

export const lightTheme: Theme = {
	colors: {
		body: ' hsl(236, 33%, 92%)',
		mainBg: 'hsl(0,0%,98%)',
		text: 'hsl(237, 14%, 26%)',
		border: '#fff',
		background: 'green',
		blur: 'hsl(235, 19%, 35%)',
		faint: '',
		btn: '',
	},
	pictures: {
		mobile: lightImg,
		desktop: desktopLightImg,
	},
};

export const darkTheme: Theme = {
	colors: {
		body: 'hsl(235, 21%, 11%)',
		mainBg: 'hsl(237, 14%, 26%)',
		text: 'hsl(234, 39%, 85%)',
		border: '#fddee7',
		background: 'orange',
		blur: 'hsl(233, 14%, 35%)',
		faint: '',
		btn: '',
	},
	pictures: {
		mobile: darkImg,
		desktop: desktopDarkImg,
	},
};
