import MyContext from "./MyContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Cart from "./views/Cart";
import PizzaDetail from "./views/Pizza";
function App() {
  const [pizzasInfo, setPizzasInfo] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const sustractingPizzas = (shoppingCart, id) => {
    shoppingCart?.forEach((item, i) => {
    if (item.id === id && item.quantity >= 1) {
      item.quantity --;
      if (item.quantity < 1) {
        shoppingCart.splice(i, 1);
      }
    } 
    })
    setShoppingCart([...shoppingCart]);
  };

  const addingCartItems = (shoppingCart, id, name, img = "", price = 0) => {
    let finded = false;
    shoppingCart?.forEach(item => {
      if (item.id === id) {
        finded = true;
        item.quantity ++;
      } 
      })
      setShoppingCart([...shoppingCart]);
      if (!finded) {
        let item = [{
          id:  id,
          name: name,
          img: img,
          price: price,
          quantity: 1
      }];
      setShoppingCart([...shoppingCart, ...item]);
      }
};

  const totalAmount = () => {
    let amount = 0;
    shoppingCart?.map(item => {
      amount += (item.quantity * item.price);
      return amount; 
    });
    setTotalPrice(amount);
  };
  const sharedData = { pizzasInfo, shoppingCart, setShoppingCart, addingCartItems, totalPrice, sustractingPizzas };
  const getData = async () => {
    try{
      const data = await fetch("/pizzas.json");
      const pizzaData = await data.json();
      setPizzasInfo(pizzaData);
    } catch (e){
      alert(e.message);
    }
  };
  
  useEffect(() => {
    totalAmount();
  }, [shoppingCart]);
  
  useEffect (() => {
    getData();
  }, []);
  return (
    <div className="App">
      <MyContext.Provider value={sharedData}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
