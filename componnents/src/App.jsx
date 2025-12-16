import Button from "./componnents/Button";
import Counter from "./componnents/Counter";
import Student from "./componnents/Student";
import Box from "./componnents/Box";
import ProductList from "./componnents/ProductList";
import Card from "./componnents/Cards";
import Title from "./componnents/Title";
import UserCard from "./componnents/UserCard";
import Product from "./componnents/Product";
import './App.css'

function App() {

  const totalCount = 3;

  return (
    <>

      <Button text="확인" />
      <Button />

      <Counter count={10} />
      <Counter count={0} />
      <Counter count={totalCount} />

      <Student name="김철수" age={20} isStudent= {true} />
      <Student name="홍길동" age={30} isStudent={false} />
      
      <Box style={{
        width: "600px",
        border: "1px solid #000",
        borderRadius: "8px"
      }}/>

      <ProductList />

      <Card>
        <h1>공지사항</h1>
        <p>오늘은 휴강입니다</p>
      </Card>

      <Title title="제목">
        <p>내용</p>
      </Title>

      <UserCard name="김철수" age={20} />

      <Product name="상품1" price={1000} />
      <Product name="상품2" price={2000} />
      <Product name="상품3" price={3000} />
      
    </>
  )

}

export default App
