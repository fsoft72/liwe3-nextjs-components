import RadioButton from '../../components/RadioButton/index';

const TestPage = () => {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        // read radios value
        const rb01 = data.get("rb01");
        const rb02 = data.get("rb02");
        console.log("=== Rb01 value:", rb01 );
        console.log("=== Rb02 value:", rb02 );
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
            <h1>RadioButton Test</h1>
            <form onSubmit={submit}>
                <RadioButton
                    name="rb01"
                    radios={radios}
                    onChange={(value:string) => { console.log("=== Value rb01", value); return true; }}
                    type="rounded"
                />
                <RadioButton
                    name="rb02"
                    radios={radios}
                    onChange={(value:string) => { console.log("=== Value rb02", value); return true; }}
                    type="squared"
                    direction="row"
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default TestPage;