interface Theme {
	body: string;
	text: string;
	border: string;
	background: string;
}

export const lightTheme: Theme = {
	body: '#fff',
	text: '#000',
	border: '#fff',
	background: 'green',
};

export const darkTheme: Theme = {
	body: '#000',
	text: '#fff',
	border: '#fddee7',
	background: 'orange',
};
