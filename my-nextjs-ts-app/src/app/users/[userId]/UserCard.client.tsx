"use client";

import { useState } from "react";

type User = {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    address: {
        city: string;
        street: string;
        suite: string;
        zipcode: string;
    };
    company: {
        name: string;
        catchPhrase: string;
    };
};

export default function UserCardClient({ user }: { user: User }) {
    const [open, setOpen] = useState(false);

    return (
        <section style={{ border: "1px solid #ccc", padding: 16 }}>
            <h2>{user.name}</h2>
            <p>email: {user.email}</p>
            <p>username: {user.username}</p>

            <button onClick={() => setOpen((v) => !v)}>
                {open ? "추가 정보 숨기기" : "추가 정보 보기"}
            </button>

            {open && (
                <div style={{ marginTop: 12 }}>
                    <p>
                        address: {user.address.city}, {user.address.street}
                    </p>
                    <p>company: {user.company.name}</p>
                </div>
            )}
        </section>
    );
}