import classes from './index.module.scss';

interface ToggleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;

	onClick: () => void;

	toggled?: boolean;

	sx?: Record<string, any>;
}

const ToggleButton = ( { children, onClick, toggled, sx }: ToggleButtonProps ) => {
	return (
		<button onClick={onClick} style={sx} className={`${ classes.button } ${ toggled ? classes.selected : '' }`}>
			{children}
		</button>
	);
};

export default ToggleButton;