import ProductCard from './ProductCard';

function ProductList() {
    const products = [
        { id: 1, name: "고급 게이밍 마우스", price: 55000, img: "mouse.jpg" },
        { id: 2, name: "인체공학 키보드", price: 129000, img: "keyboard.jpg" },
        { id: 3, name: "4K 울트라 모니터", price: 380000, img: "monitor.jpg" },
    ];

    return (
        <>
            <h2>오늘의 추천 상품</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>

                {/* 배열의 각 요소(상품 데이터)를 순회하며 ProductCard 렌더링 */}
                {products.map(product => (
                    <ProductCard
                        key={product.id} // 리스트 렌더링 시 필수
                        imageUrl={`/images/${product.img}`}
                        name={product.name}
                        price={product.price}
                    />
                ))}
            </div>
        </>
    );
}

export default ProductList;