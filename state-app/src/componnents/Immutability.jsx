import { useState } from "react";

export default function Immutability() {
    const [user, setUser] = useState({ name: "", age: 0 });
    const [todos, setTodos] = useState([]);

    return (
        <div>
            <h2>객체 상태 (onClick 인라인)</h2>
            <p>이름: {user.name}</p>
            <p>나이: {user.age}</p>

            <button
                onClick={() =>
                    setUser((prev) => ({
                        ...prev,
                        name: "Kim",
                    }))
                }
            >
                이름 변경
            </button>

            <button
                onClick={() =>
                    setUser((prev) => ({
                        ...prev,
                        age: prev.age + 1,
                    }))
                }
            >
                나이 +1
            </button>

            <h2>배열 상태 (onClick 인라인)</h2>

            <button
                onClick={() =>
                    setTodos((prev) => [
                        ...prev,
                        { id: Date.now(), title: "공부" },
                    ])
                }
            >
                할 일 추가
            </button>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.title}</li>
                ))}
            </ul>


        </div>
    );
}