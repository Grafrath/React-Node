import React, { useState } from 'react';

export default function TwoInputs() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userList, setUserList] = useState([]);

    const handleAdd = () => {
        if (email.trim() === "" || password.trim() === "") {
            return;
        }

        const newItem = {
            id: Date.now(),
            emailValue: email,
            passwordValue: password
        };

        setUserList([...userList, newItem]);
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <h2>리스트</h2>
            <label>이메일</label>
            <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleAdd();
                    }
                }}
            /><br/>
            <label>비밀번호: </label>
            <input
                type="password" // 비밀번호는 안 보이게 type="password" 추천
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAdd();
                }}
            /><br />

            <button onClick={handleAdd}>리스트에 추가</button>

            <hr />
            <p>실시간 입력 이메일: {email}</p>
            <p>실시간 입력 비밀번호: {password}</p>

            <h3>등록된 목록</h3>
            <ul>
                {setUserList.map((item) => (
                    <li key={item.id}>
                        <strong>이메일:</strong> {item.emailValue} | <strong>비번:</strong> {item.passwordValue}
                    </li>
                ))}
            </ul>
        </div>
    );
}