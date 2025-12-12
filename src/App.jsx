
import './App.css'
import { useState, useEffect } from 'react'

function App() {

  const [cart, setCart] = useState([]);

  // Boshlanishida localStorage dan o‘qish
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("soldProduct")) || [];
    setCart(saved);
  }, []);

  // storage eventni tinglash
  useEffect(() => {
    const handleStorage = () => {
      const updated = JSON.parse(localStorage.getItem("soldProduct")) || [];
      setCart(updated);
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);
  return (
    <div className='app'>
    {cart ? cart.map((item)=>{
      return<div className='app_card'>

        <div className="image">
        <img src={item.image}/>   
        </div>

        <div className="card-main">
        <h3 className = "cardTitle"> ${item.title}</h3>
        <p className="cardPrice">$ {item.price}</p>
        
        </div>

      </div>
    })
  : <p>lorem</p>
  }
    </div>
  )
}

export default App
