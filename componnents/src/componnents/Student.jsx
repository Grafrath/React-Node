function Student({ name, age, isStudent }) {

    const greeting = `안녕하세요, 저는 ${name}이고 ${age}살입니다.`;

    return (
        <div>
            <h3>{greeting}</h3>
            <p>학생 여부: {isStudent ? 'O' : 'X'}</p>
        </div>
    );
}

export default Student;