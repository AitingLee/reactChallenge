import { useState } from "react";
import { ColorfulDiv } from "@components/ColorfulCounter/style";

function ColorfulCounter() {
    const [count, setCount] = useState(0)

    let textColor = count < 5 ? "red" : (count > 10 ? "green" : "yellow");

    return (
        <>
        <ColorfulDiv $color={textColor}>count = {count}</ColorfulDiv>
        <button onClick={() => setCount(count + 1)} >
            點我哇！
        </button>
        </>
    )
}


export default ColorfulCounter;