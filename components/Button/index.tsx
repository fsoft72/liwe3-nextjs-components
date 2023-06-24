import classes from './index.module.scss';

interface ButtonProps {
	label?: string;
	onClick?: () => void;
}

const Button = ( { label = 'Click me', onClick }: ButtonProps ) => {
	return (
		<button className={classes.button} onClick={onClick}>{label}</button>
	);
};

export default Button;