import React, { useState } from 'react';

function CounterFunctional() {

    const [count, setCount] = useState(0); 

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h2>함수형 컴포넌트 카운터(with Hooks)</h2>
            <p> 현재 숫자: { count } </p>
                <button onClick = { handleClick } >
                    + 1 증가
                </button>
         </div>
  );

}

export default CounterFunctional;