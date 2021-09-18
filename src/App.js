import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))

  }, [])
  return (
    <div>
      <h1>External users</h1>
      <div className='userStyle'>
        {
          users.map(user => <User name={user.name} email={user.email} ></User>)
        }
      </div>
    </div>

  );
}
function User(props) {
  const { name, email } = props;
  return (
    <div className='user'>
      <h2>name: {name}</h2>
      <h3>email: {email}</h3>
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  const handleDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleIncrease}>Increase</button>

    </div>
  );
}

function Product(props) {
  const { name, price } = props;
  const productStyle = {
    border: '3px solid blue',
    borderRadius: '10px',
    margin: '10px'
  }
  return (
    <div className="product" style={productStyle}>
      <h2>Name: {name}</h2>
      <h4>Price: {price}</h4>
    </div>
  )
}
// const products = [
//   { name: 'mobile', price: 15000 },
//   { name: 'camera', price: 55000 },
//   { name: 'laptop', price: 150000 },
//   { name: 'watch', price: 5000 },
//   { name: 'shoe', price: 500 },
// ]
// {products.map(product => <Product name={product.name} price={product.price}></Product>)}
{/* <Product name="mobile" price="15000"></Product>
<Product name="laptop" price="150000"></Product>
<Product name="camera" price="55000"></Product>
<Product name="mobile" price="15000"></Product>
<Product name="mobile" price="15000"></Product> */}
export default App;
