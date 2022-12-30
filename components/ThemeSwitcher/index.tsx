import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

import classes from './index.module.scss';

// Create a component that allows the user to switch between the light and dark theme
export function ThemeSwitcher () {
	const { theme, setTheme } = useContext( ThemeContext );

	const toggleTheme = ( e: any ) => {
		console.log( e.target );

		if ( e.target.checked ) {
			setTheme( 'dark' );
		} else {
			setTheme( 'light' );
		}
	};

	return (
		<label className={classes.switch}>
			<input type="checkbox" onChange={toggleTheme} />
			<span className={classes.slider}></span>
		</label>
	);
}
