function Product({ name, price }) {
    
    return (
        <div style={{
            border: "1px solid #000",
            borderRadius: "8px"
        }}>
            <h3>{name}</h3>
            <p>{price}원</p>
        </div>
    );
}

export default Product;