import CheckBox from '../../components/CheckBox/index';

const TestPage = () => {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        // read switch1 value
        const cb01 = data.get("cb01");
        const cb02 = data.get("cb02");
        console.log("=== Cb01", cb01 ? "CHECKED" : "UNCHECKED");
        console.log("=== Cb02", cb02 ? "CHECKED" : "UNCHECKED");
    }

    return (
        <div>
            <h1>CheckBox Test</h1>
            <form onSubmit={submit}>
                <CheckBox 
                    name="cb01" 
                    checked={true} 
                    label={"Squared checkbox"} 
                    type="squared"
                    onChange={(checked)=>{
                        console.log("=== cb01", checked);
                        return checked;
                    }}
                />
                <CheckBox 
                    name="cb02" 
                    checked={false} 
                    label={"Rounded checkbox"} 
                    type="rounded"
                    onChange={(checked)=>{
                        console.log("=== cb02", checked);
                        return checked;
                    }}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default TestPage;