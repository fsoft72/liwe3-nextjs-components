import Button from '../components/Button';
import GrowButton from '../components/GrowButton';
import SendButton from '../components/SendButton';
import SlackArea from '../components/SlackArea';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
export default function Home () {
	return (
		<>
			<Button />
			<SendButton label="Send message" onClick={() => console.log( 'Send click' )} />

			<div style={{ display: 'flex', justifyContent: 'center', alignContent: 'center' }}>
				<GrowButton label="Hello World" onClick={() => console.log( 'clicked' )} />
				<ThemeSwitcher />
			</div>

			<SlackArea />
		</>
	);
}
