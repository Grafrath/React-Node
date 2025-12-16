function UserCard({ name, age }) {
    return (
        <section style={{
            border: "1px solid #000",
            borderRadius: "8px"
        }}>
            안녕하세요, 저는 {name}이고 {age}살입니다.
        </section>
    );
}

export default UserCard;