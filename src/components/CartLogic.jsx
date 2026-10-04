import { useState } from "react";

const CartLogic = () => {
  const price = 125;
  const [qty, setQty] = useState(0);
  const [openCart, setOpenCart] = useState(false);

  const minus = () => {
    if (qty > 0) setQty(qty - 1);
  };

  const plus = () => {
    setQty(qty + 1);
  };

  const addToCart = () => {
    if (qty === 0) {
      alert("Your cart is empty");
      return;
    }
    alert(`Added ${qty} item(s) to cart`);
  };

  return (
    <div className="relative w-full max-w-xl mx-auto p-4">
      <div className="flex justify-end mb-6">
        <button onClick={() => setOpenCart(!openCart)} className="relative">
          <span className="w-6 h-6 border border-gray-700 block"></span>
        </button>

        {openCart && (
          <div className="absolute right-0 top-10 w-72 bg-white shadow-xl rounded-lg p-4">
            <h2 className="font-bold mb-3">Cart</h2>

            {qty === 0 ? (
              <p className="text-gray-500 text-sm">Your cart is empty</p>
            ) : (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-md"></div>

                  <div className="text-sm text-gray-700">
                    Fall Limited Edition Sneakers
                    <br />
                    <span className="text-gray-500">
                      ${price}.00 × {qty}
                    </span>
                  </div>

                  <span className="font-bold">${price * qty}.00</span>
                </div>

                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg">
                  Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <p className="text-gray-500 uppercase text-xs tracking-widest font-semibold">
          Sneaker Company
        </p>

        <h1 className="text-3xl font-bold">Fall Limited Edition Sneakers</h1>

        <p className="text-gray-600 text-sm leading-relaxed">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>

        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">$125.00</span>
          <span className="bg-orange-100 text-orange-600 px-2 py-1 rounded-md text-sm font-semibold">
            50%
          </span>
          <span className="md:hidden ml-auto text-gray-400 line-through text-sm">$250.00</span>
        </div>

        <span className="hidden md:block text-gray-400 line-through text-sm">$250.00</span>

        <div className="flex flex-col md:flex gap-4 mt-4">
          <div className="flex items-center bg-gray-100 rounded-lg px-3 py-2 w-full md:w-32 justify-between">
            <button
              onClick={minus}
              className="text-orange-500 font-bold text-xl"
            >
              -
            </button>
            <span className="font-semibold">{qty}</span>
            <button
              onClick={plus}
              className="text-orange-500 font-bold text-xl"
            >
              +
            </button>
          </div>

          <button
            onClick={addToCart}
            className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-4 py-3 shadow-md"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartLogic;
