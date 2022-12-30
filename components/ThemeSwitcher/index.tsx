import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

// Create a component that allows the user to switch between the light and dark theme
export function ThemeSwitcher () {
	const { theme, setTheme } = useContext( ThemeContext );

	const toggleTheme = () => {
		theme === 'light' ? setTheme( 'dark' ) : setTheme( 'light' );
	};

	return (
		<button onClick={toggleTheme}>
			Toggle theme (currently {theme})
		</button>
	);
}
