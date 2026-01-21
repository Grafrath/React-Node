import Link from 'next/link'; // 1. Link 컴포넌트 임포트
import PostList from "@/components/PostList";

export default function Home() {
  const name = "김이박 최강라트";
  const post = {
    title: "첫 번째 게시글",
  };

  const userIds = [1, 2, 3, 4, 5];

  return (
    <main style={{ padding: '24px', maxWidth: '800px', margin: '0 auto' }}>
      {/* 1. 헤더 섹션: 환영 인사 및 프로필 이동 */}
      <section style={{ marginBottom: '40px' }}>
        <h1>안녕하세요, {name}님</h1>
        <div style={{ marginTop: '16px' }}>
          <Link href="/profile" style={{
            padding: '10px 20px',
            backgroundColor: '#0070f3',
            color: 'white',
            borderRadius: '5px',
            textDecoration: 'none',
            fontWeight: 'bold',
            display: 'inline-block'
          }}>
            프로필 보러가기
          </Link>
        </div>
      </section>

      <hr style={{ border: '0', borderTop: '1px solid #eee', marginBottom: '30px' }} />

      {/* 2. 포스트 리스트 섹션 */}
      <section style={{ marginBottom: '40px' }}>
        <h2 style={{ marginBottom: '16px' }}>최신 게시글</h2>
        <PostList post={post} />
      </section>

      <hr style={{ border: '0', borderTop: '1px solid #eee', marginBottom: '30px' }} />

      {/* 3. 동적 라우팅 실습 링크 섹션 */}
      <section>
        <h2 style={{ marginBottom: '16px' }}>라우팅 실습</h2>
        <ul style={{ lineHeight: '2' }}>
          <li>
            <Link href="/posts/nextjs-routing">Next.js Routing 이해 (정상)</Link>
          </li>
          <li>
            <Link href="/posts/react-state">React State 기초 (정상)</Link>
          </li>
          <li>
            <Link href="/posts/unknown-post">존재하지 않는 포스트 (404 테스트)</Link>
          </li>
        </ul>
      </section>

      <section>
        <h3 style={{ fontSize: '18px', marginBottom: '10px' }}>유저 상세 (JSONPlaceholder)</h3>
        <p style={{ color: '#666', fontSize: '14px' }}>유저 상세 페이지로 이동해보세요.</p>
        <ul style={{ lineHeight: '2' }}>
          {/* ✅ 이제 userIds가 내부에 정의되어 있어 map이 정상 작동합니다. */}
          {userIds.map((id) => (
            <li key={id}>
              <Link href={`/users/${id}`}>User {id} 보기</Link>
            </li>
          ))}
        </ul>
      </section>

      <section style={{ marginTop: "20px", padding: "10px", border: "1px solid #ccc" }}>
        <h2>테스트 메뉴</h2>
        <Link href="/api/hello-test" style={{ color: "blue", textDecoration: "underline" }}>
          Hello UI 테스트 페이지로 이동하기
        </Link>
      </section>
    </main>
  );
}
