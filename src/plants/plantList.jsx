export default function PlantsList({ plants, onAddToCart }) {
  return (
    <div className="plants-list">
      {plants.map((plant) => (
        <div key={plant.id} className="plant-card">
          <div className="plant-emoji">{plant.image}</div>
          <h3>{plant.name}</h3>
          <button onClick={() => onAddToCart(plant)}>Add to cart</button>
        </div>
      ))}
    </div>
  );
}
