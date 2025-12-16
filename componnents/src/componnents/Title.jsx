function Title({ title, children }) {
    return (
        <section style={{
            border: "1px solid #000",
            borderRadius: "8px"
        }}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Title;