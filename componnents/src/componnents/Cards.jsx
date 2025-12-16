function Card(props) {
    return (
        <div className="card" style={{
            border: "1px solid #000",
            borderRadius: "8px"
        }}>
            {props.children}
        </div>
    );
}

export default Card;