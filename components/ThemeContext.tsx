import { createContext } from 'react';

interface ThemeContextProps {
	theme: string;
	setTheme: ( theme: string ) => void;
};

// Create a context to store the current theme and the setTheme function
export const ThemeContext = createContext( {
	theme: 'light',
	setTheme: ( theme: string ) => { },
} as ThemeContextProps );