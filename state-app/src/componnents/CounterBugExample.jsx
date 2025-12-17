import { useState } from "react";

export default function CounterBugExample() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        //setCount(count + 1);
        //setCount(count + 1);
        setCount((prev) => prev + 1);
        setCount((prev) => prev + 1);
        console.log("count:", count);
    };

    return (
        <div>
            <h1>count: {count}</h1>
            <button onClick={handleClick}>+2 증가 기대</button>
        </div>
    );
}