import React from 'react';
import {
	ThemeProvider,
	createTheme
} from '@mui/material/styles';
import { createRoot } from 'react-dom/client';
import App from './App';
import store from './app/Store';
import { Provider } from 'react-redux';
import './index.css';

export const themeOptions = {
	palette: {
		type: 'dark',
		primary: {
			main: '#FE5000',
			contrastText: '#000000'
		},
		secondary: {
			main: '#BABFB7',
			contrastText: '#000000'
		},
		tertiary: {
			main: '#90D601',
			contrastText: '#000000'
		},
		text: {
			primary: '#BABFB7',
		}
	}
};

const theme = createTheme(themeOptions);
const container = document.getElementById('root');
const root = createRoot(container);
root.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>
);