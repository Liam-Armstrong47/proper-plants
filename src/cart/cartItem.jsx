export default function CartItem({ item, onUpdateQuantity }) {
  return (
    <div className="cart-item">
      <span className="cart-item-emoji">{item.image}</span>
      <div className="cart-item-details">
        <p>{item.name}</p>
        <p>{item.price}</p>
      </div>
      <div className="cart-item-controls">
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        ></button>
        <span>{item.quantity}</span>
        <button
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        ></button>
      </div>
    </div>
  );
}
