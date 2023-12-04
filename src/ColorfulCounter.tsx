import { useState } from "react";

function ColorfulCounter() {
    const [count, setCount] = useState(0)

    let textColor = count < 5 ? "red" : (count > 10 ? "green" : "yellow");

    return (
        <>
            <div style={{ color: textColor }}> count = {count}</div>
            <button onClick={() => setCount(count + 1)} >
                點我哇！
            </button>
        </>
    )
}

export default ColorfulCounter;