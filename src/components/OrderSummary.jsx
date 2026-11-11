import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

function OrderSummary() {
  const {
    cartItems,
    addToCart,
    removeFromCart,
    changeQuantity,
    clearCart,
    subtotal
  } = useContext(CartContext);

  const [confirmation, setConfirmation] = useState("");

  const tax = subtotal * 0.07;
  const total = subtotal + tax;

  function placeOrder() {
    setConfirmation(`Order placed! Total: $${total.toFixed(2)}`);
    clearCart();
  }

  return (
    <section>
      <h2>Your Order</h2>

      {confirmation && <p>{confirmation}</p>}

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id}>
              <h3>{item.name}</h3>

              <button onClick={() => changeQuantity(item.id, -1)}>
                -
              </button>

              <span> {item.quantity} </span>

              <button onClick={() => changeQuantity(item.id, 1)}>
                +
              </button>

              <button onClick={() => removeFromCart(item.id)}>
                Remove
              </button>

              <p>
                ${(item.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}

          <p>Subtotal: ${subtotal.toFixed(2)}</p>
          <p>Tax (7%): ${tax.toFixed(2)}</p>
          <h3>Total: ${total.toFixed(2)}</h3>

          <button onClick={placeOrder}>
            Place Order
          </button>
        </>
      )}
    </section>
  );
}

export default OrderSummary;