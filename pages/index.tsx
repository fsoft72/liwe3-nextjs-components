import { useState } from 'react';
import Button from '../components/Button';
import GrowButton from '../components/GrowButton';
import SendButton from '../components/SendButton';
import SlackArea from '../components/SlackArea';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import ToggleButton from '../components/ToggleButton';
import Toolbar from '../components/Toolbar';
import LinkIcon from '../icons/LinkIcon';

export default function Home () {
	const [ toggled, setToggled ] = useState( false );

	const toggleClick = () => {
		setToggled( !toggled );
	};

	return (
		<>
			<Button />
			<SendButton label="Send message" onClick={() => console.log( 'Send click' )} />

			<div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
				<GrowButton label="Hello World" onClick={() => console.log( 'clicked' )} />
				<ThemeSwitcher />
			</div>

			<SlackArea />

			<Toolbar>
				<ToggleButton onClick={toggleClick} toggled={toggled}>Hello</ToggleButton>
			</Toolbar>


			<div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}>
				<SlackArea />
				<SlackArea />
			</div>
			<LinkIcon />

		</>
	);
}
