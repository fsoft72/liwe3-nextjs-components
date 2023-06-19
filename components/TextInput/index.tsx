import classes from './index.module.scss';

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	name: string;

	required?: boolean;
	placeholder?: string;
}

const TextInput = ( props: TextInputProps ) => {
	return (
		<div className={classes.textInput}>
			<input type="text" name={props.name} required={props.required} />
			<label htmlFor={props.name} className={classes.label}>{props.placeholder}</label>
			<div className={classes.underline}></div>
		</div>

	);
};

export default TextInput;