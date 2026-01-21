import { notFound } from "next/navigation";

// ✅ props 타입: params 구조를 TS로 고정
type PostPageProps = {
    params: Promise<{ postId: string }>;
};

// ✅ "서버에서 데이터 가져오는 척"하는 함수 (async/await 실습)
async function fetchPost(postId: string) {
    // 네트워크 지연 흉내
    await new Promise((r) => setTimeout(r, 300));

    // 더미 데이터 (DB라고 생각)
    const DB: Record<string, { title: string; content: string }> = {
        "nextjs-routing": {
            title: "Next.js Routing 이해",
            content: "동적 라우팅에서 params가 어떻게 들어오는지 실습한다.",
        },
        "react-state": {
            title: "React State 기초",
            content: "useState 개념을 간단히 정리한다.",
        },
    };

    return DB[postId] ?? null;
}

export default async function PostPage({ params }: PostPageProps) {
    // ✅ 1) params 추출
    const { postId } = await params;

    // ✅ 2) 서버에서 async 데이터 페칭
    const post = await fetchPost(postId);

    // ✅ 3) 없으면 404
    if (!post) return notFound();

    return (
        <main style={{ padding: 24 }}>
            <h1>Post Detail</h1>

            <p>
                URL에서 받은 postId: <b>{postId}</b>
            </p>

            <hr />

            <h2>{post.title}</h2>
            <p>{post.content}</p>

            <hr />

            <p>params 객체 확인</p>
            <pre style={{ background: "#f5f5f5", padding: 12 }}>
                {JSON.stringify({ postId }, null, 2)}
            </pre>
        </main>
    );
}