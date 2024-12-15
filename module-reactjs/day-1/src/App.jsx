import { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'

function App() {
  const [count, setCount] = useState(0)
  const customers = [
    {
      id:1,
      img:reactLogo,
      name:"Phong",
      price:23,
    },
    {
      id:2,
      img:reactLogo,
      name:"hung",
      price:23,
    },
    {
      id:3,
      img:reactLogo,
      name:"cuong",
      price:23,
    },
    {
      id:4,
      img:reactLogo,
      name:"khuong",
      price:23,
    },
    {
      id:5,
      img:reactLogo,
      name:"lam",
      price:23,
    }
  ];
  return (
    <div className="product-list">
      {customers.map((customer) => (
        <div className="product-card" key={customer.id}>
          <img src={customer.img} alt={customer.name} className='product-img' />
          <h4 className="product-id">id: {customer.id}</h4>
          <h3 className="product-name">name: {customer.name}</h3>
          <p className="product-price">price: {customer.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App
