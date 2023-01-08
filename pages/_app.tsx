import type { AppProps } from 'next/app';
import '../styles/variables.scss';
import '../styles/global.scss';

import Head from 'next/head';

import { ThemeContext } from '../components/ThemeContext';
import { useState } from 'react';

export default function App ( { Component, pageProps }: AppProps ) {
	const [ theme, setTheme ] = useState( "light" );

	return <>
		<Head>
		</Head>
		<ThemeContext.Provider value={
			{
				theme,
				setTheme
			}}>
			<div className={`${ theme } body`}>
				<Component {...pageProps} />
			</div>;
		</ThemeContext.Provider>
	</>;
}
