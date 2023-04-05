import 'styled-components';

interface Theme {
	body: string;
	text: string;
	border: string;
	background: string;
}

declare module 'styled-components' {
    export interface DefaultTheme {
        body: string;
	text: string;
	border: string;
	background: string;
}
}