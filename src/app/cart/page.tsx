'use client';  // Ensure this is a client-side component

import { useCart } from '../../contexts/CartContext'; // Access cart context
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const CartPage = () => {
  const { cart, removeFromCart } = useCart(); // Use cart context to get cart items and remove function
  const router = useRouter();

  const handleRemoveItem = (id: number) => {
    removeFromCart(id); // Remove item from cart
  };

  const handleCheckout = () => {
    // Placeholder for checkout logic, such as redirecting to a checkout page
    alert('Proceeding to checkout');
    router.push('/checkout'); // Redirect to a checkout page
  };

  // If the cart is empty, show a message
  if (cart.length === 0) {
    return (
      <div className="text-center py-8">
        <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        <Link href="/" className="mt-4 inline-block px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition">
          Go Back to Home
        </Link>
      </div>
    );
  }

  // Render cart items if cart is not empty
  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      <div className="space-y-4">
        {/* List cart items */}
        {cart.map((item) => (
          <div key={item.id} className="flex justify-between items-center border-b pb-4">
            <div className="flex items-center">
              <span className="font-semibold">{item.startTime} - {item.endTime}</span> {/* Example for start and end time */}
            </div>
            <button
              onClick={() => handleRemoveItem(item.id)}
              className="text-red-600 hover:text-red-800 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-between items-center">
        <span className="font-bold text-lg">Total: ${cart.length * 20}</span> {/* Assuming each session costs $20 */}
        <button
          onClick={handleCheckout}
          className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartPage;
