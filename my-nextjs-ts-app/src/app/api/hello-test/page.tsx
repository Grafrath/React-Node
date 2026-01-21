"use client";

import { useEffect, useState } from "react";

type HelloResponse = {
    message: string;
};

export default function HelloPage() {
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
        "idle"
    );
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        const load = async () => {
            try {
                setStatus("loading");

                const res = await fetch("/api/hello");
                if (!res.ok) throw new Error("HTTP_ERROR");

                const data: HelloResponse = await res.json();
                setMessage(data.message);
                setStatus("success");
            } catch {
                setStatus("error");
            }
        };

        load();
    }, []);

    return (
        <main style={{ padding: 24, fontFamily: "system-ui" }}>
            <h1>Hello UI</h1>

            {status === "idle" && <p>대기 중이다.</p>}
            {status === "loading" && <p>불러오는 중이다...</p>}
            {status === "error" && <p>요청에 실패했다.</p>}
            {status === "success" && (
                <p>
                    API 응답: <b>{message}</b>
                </p>
            )}
        </main>
    );
}