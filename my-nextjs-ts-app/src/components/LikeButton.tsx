"use client";

import { useState } from "react";

export default function LikeButton() {
    const [count, setCount] = useState<number>(0);

    return (
        <button onClick={() => setCount(count + 1)}>
            ❤️ 좋아요 {count}
        </button>
    );
}