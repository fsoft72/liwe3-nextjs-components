"use client";

import PowerSwitch from "../../components/PowerSwitch";

const PowerSwitchTestPage = () => {
    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const data = new FormData(e.currentTarget);

        // read switch1 value
        const switch1 = data.get("switch1");
        console.log("=== Switch1", switch1 ? "ON" : "OFF");
    }

    return (
        <div>
            <h1>Power Switch Test</h1>
            <form onSubmit={submit}>
                <PowerSwitch name="switch1" checked={true} height={64} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default PowerSwitchTestPage;