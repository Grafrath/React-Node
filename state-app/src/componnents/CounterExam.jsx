import React, { useState } from 'react';

export default function CounterExam() {
    const [count, setCount] = useState(0); 

    const handleClick = (amount) => {
        setCount(count + amount);
    };

    return (
        <div>
            <h2>숫자 버튼</h2>
            <p> 현재 숫자: {count} </p>
            <button onClick={() => handleClick(1)} >
                + 1 증가
            </button>
            <button onClick={() => handleClick(-1)} >
                - 1 감소
            </button>
        </div>
    );
}