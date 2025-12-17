import React, { useState } from 'react';

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false); 

    const handleClick = () => {
        setIsDark(!isDark);
    };

    return (
        <div style={{
            padding: 16,
            backgroundColor: isDark ? "#111" : "#fff",
            color: isDark ? "#fff" : "#111",
            minHeight: 200,
        }}>
            <h2>다크모드</h2>
            <p>현재 모드: {isDark ? "Dark" : "Light"}</p>
            <button onClick={handleClick} >
                전환
            </button>
        </div>
    );
}