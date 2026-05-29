import { memo, useMemo, useState } from "react";

function MemoExample() {
    const [state, setState] = useState("");
    return (<>
        <h1>Memo Example</h1>
        {new Date().toLocaleTimeString()}
        <label htmlFor="stateInput">State Input</label>
        <input type="text" name="stateInput" id="stateInput" value={state} onChange={(e) => setState(e.target.value)} />
        {useMemo(() => <MemoChildComponent />, [])}
    </>);
}

const MemoChildComponent = function () {

    return (<section>
        <h2>ChildComponent</h2>
        {new Date().toLocaleTimeString()}
    </section>
    );
};
export default MemoExample;