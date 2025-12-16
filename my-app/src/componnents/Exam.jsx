import React, { useEffect } from 'react';

function Exam() {
    const exam = "홍길동";
    const age = 15;
    const lange = ["HTML", "CSS", "JS", "React"];    const isDarkMode = false;

    // isDarkMode 상태에 따른 body 스타일 변경 로직을 useEffect로 이동
    useEffect(() => {
        if (isDarkMode) {
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        } else {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        }

        return () => {
            document.body.style.backgroundColor = '';
            document.body.style.color = '';
        };
    }, [isDarkMode]);

    return (
        <div>
            <p>안녕하세요, {exam}님</p>
            {age > 19 ? <p>성인입니다.</p> : <p>미성년자입니다.</p>}

            <ul>
                {lange.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default Exam;