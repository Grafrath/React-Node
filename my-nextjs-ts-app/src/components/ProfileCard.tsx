type Props = { name: string }

export default function ProfileCard({ name }: Props) {
    return (
        <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
            <h2>{name}님의 프로필입니다</h2>
        </div>
    );
}