import { useState } from "react";
import PLANTS from "./data";
import PlantsList from "./plants/plantList";
import Cart from "./cart/cartList";

export default function App() {
  const [cart, setCart] = useState([]);

  function addToCart(plant) {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === plant.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === plant.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        return [...prevCart, { ...plant, quantity: 1 }];
      }
    });
  }

  function updateQuantity(plantId, newQuantity) {
    setCart((prevCart) => {
      if (newQuantity <= 0) {
        return prevCart.filter((item) => item.id !== plantId);
      } else {
        return prevCart.map((item) =>
          item.id === plantId ? { ...item, quantity: newQuantity } : item,
        );
      }
    });
  }
  return (
    <div className="app">
      <header>
        <h1>🌱 Proper Plants</h1>
      </header>
      <main>
        <PlantsList plants={PLANTS} onAddToCart={addToCart} />
        <Cart cart={cart} onUpdateQuantity={updateQuantity} />
      </main>
    </div>
  );
}
