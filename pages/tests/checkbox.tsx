"use client";

import CheckBox from '../../components/CheckBox/index';

const PowerSwitchTestPage = () => {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        // read switch1 value
        const cb01 = data.get("cb01");
        console.log("=== Cb01", cb01 ? "CHECKED" : "UNCHECKED");
    }

    return (
        <div>
            <h1>CheckBox Test</h1>
            <form onSubmit={submit}>
                <CheckBox 
                    name="cb01" 
                    checked={true} 
                    label={"round checkbox"} 
                    type="squared"
                    onChange={(checked)=>{
                        console.log("=== cb01", checked);
                        return checked;
                    }}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default PowerSwitchTestPage;