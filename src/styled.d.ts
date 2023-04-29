import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			body: string;
			mainBg: string;
			text: string;
			border: string;
			background: string;
			blur: string;
		};
		pictures: {
			mobile: string;
			desktop: string;
		};
	}
}
