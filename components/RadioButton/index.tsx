import { useState } from "react";
import classes from './index.module.scss';

interface RadioButtonProps {
    /** Radios button array */
    radios: RadioButtonModel[];

    /** Form element name */
	name: string;

	/** checkbox type: squared or rounded */
	type?: "squared" | "rounded";

    /** Custom styles */
	sx?: Record<string, any>;

    /** optional callback to be called when checkbox change status */
	onChange?: ( checked: boolean ) => {}
}

interface RadioButtonInternal extends RadioButtonProps {
    radios: RadioButtonModel[];
	cbState: boolean;
	setCbState: ( cbState: boolean ) => void;
	handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

type RadioButtonModel = {
	/** checkbox label */
	label: string;

	/** if checkbox is a required field */
	required?: boolean;

    /** Whether the checkbox is checked or not */
	checked?: boolean;

    /** Radio button value */
    value?: string;
}

type RadioButtonModelInternal = RadioButtonModel & {
    index: number;
    name: string;
    cbState: boolean;
    radios: RadioButtonModel[];
    setCbState: ( cbState: boolean ) => void;
    handleChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
}


const Rounded: React.FC<RadioButtonModelInternal> = (props) => {
    console.log("=== props", props);
	return (
        <label className={classes.label}>
            <input 
                key={props.index}
                value={props.value} 
                name={props.name} 
                id={`${props.name}_${props.index}`} 
                className={classes.radio_input} 
                type="radio"
            />
            <div className="radio_design"></div>
            <div className="label_text">{props.label}</div>
        </label>
	);
}

const Squared: React.FC<RadioButtonModelInternal> = (props) => {
	return (
        <label className={classes.label}>
            <input 
                key={props.index}
                value={props.value} 
                name={props.name} 
                id={`${props.name}_${props.index}`} 
                className={classes.radio_input} 
                type="radio"
            />
            <div className="radio_design"></div>
            <div className="label_text">{props.label}</div>
        </label>
	);
}

const RadioButton = ( props: RadioButtonProps ) => {
	const {onChange, radios} = props;
    const [cbState, setCbState] = useState<boolean>(false);
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.checked);
	}

	const RadioButtonComponent = props.type === "squared" ? Squared : Rounded;
    const RadiosList: React.FC<RadioButtonInternal> = (props) => {
        const {radios, name, cbState, setCbState, handleChange} = props;
        return (
        <>
           {radios.map((radioProps, index) => {
                return (
                    <RadioButtonComponent
                        radios={[]} {...radioProps}
                        index={index}
                        key={index}
                        name={name}
                        cbState={cbState}
                        setCbState={setCbState}
                        handleChange={handleChange}                    />
                    );
                }
            )}
        </>
        );
    };

	return (
        <div className={classes.radio_input_wrapper} style={props.sx}>
            <RadiosList 
                radios={radios}
                cbState={cbState}
                setCbState={setCbState}
                handleChange={handleChange} name={""}            />
        </div>
	);
};

export default RadioButton;