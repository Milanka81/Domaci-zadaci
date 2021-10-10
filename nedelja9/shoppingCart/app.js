import { useEffect, useState } from "react";
import ProductForm from "./components/ProductForm";
import { getAllProducts } from "./service";
import Products from "./components/ProductList";
import Total from "./components/Total";






function App() {

  const [products, setProducts] = useState([])
  
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((el) => el.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((el) =>
          el.id === product.id ? { ...exist, qty: exist.qty + 1 } : el
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }}
  
  const onRemove = (product) => {
    const exist = cartItems.find((el) => el.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((el) => el.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((el) =>
          el.id === product.id ? { ...exist, qty: exist.qty - 1 } : el
        )
      );
    }
    }  

  useEffect(()=>{
    getAllProducts().then(res=> {
      setProducts(res.data)})},[])

  return (
    <div>
     <ProductForm setProducts={setProducts}/>
     <Products products={products} onAdd={onAdd}/>
     <Total
          cartItems={cartItems}
          onAdd={onAdd}
          onRemove={onRemove}
        ></Total>
    </div>
  );
}

export default App;
