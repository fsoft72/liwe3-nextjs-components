"use client";

import RadioButton from '../../components/RadioButton/index';

const RadioButtonTestPage = () => {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        // read switch1 value
        const rb01 = data.get("rb01");
        console.log("=== Rb01", rb01 ? "CHECKED" : "UNCHECKED");
    }

    const radios = [
        {
            key: "1",
            value: "1",
            label: "Radio 1",
        },
        {
            key: "2",
            value: "2",
            label: "Radio 2",
        },
        {
            key: "3",
            value: "3",
            label: "Radio 3",
        },
    ];
    return (
        <div>
            <h1>CheckBox Test</h1>
            <form onSubmit={submit}>
                <RadioButton
                    name="rb01"
                    radios={radios}
                    onChange={(checked:boolean) => { console.log("=== Checked", checked); return true; }}
                    type="rounded"
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default RadioButtonTestPage;