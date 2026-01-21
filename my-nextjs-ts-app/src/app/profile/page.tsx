import ProfileCard from '@/components/ProfileCard';
import Link from 'next/link';

export default function ProfilePage() {
    // 전달할 이름 변수
    const myName = "최강라트";

    return (
        <main style={{ padding: '20px' }}>
            <h1>프로필 페이지</h1>
            <hr />

            {/* ProfileCard를 사용하며 props로 이름 전달 */}
            <ProfileCard name={myName} />

            <div style={{ marginBottom: '20px' }}>
                <Link href="/" style={{
                    padding: '8px 16px',
                    backgroundColor: '#666',
                    color: 'white',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontSize: '14px'
                }}>
                    메인 보러가기
                </Link>
            </div>
        </main>
    );
}
