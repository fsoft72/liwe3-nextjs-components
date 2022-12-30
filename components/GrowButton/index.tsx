import classes from './index.module.scss';

export interface GrowButtonProps {
	label: string;

	onClick?: () => void;
}

const GrowButton = ( { label, onClick }: GrowButtonProps ) => {
	return (
		<button onClick={onClick} className={`${ classes.button } ${ classes.box }`}>
			<span className={classes.circle} aria-hidden="true">
				<span className={`${ classes.icon } ${ classes.arrow }`}></span>
			</span>
			<span className={classes.text}>{label}</span>
		</button >
	);
};

export default GrowButton;