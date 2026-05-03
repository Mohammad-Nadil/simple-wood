"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import Link from "next/link";
import { useState } from "react";
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";
import { useCartStore } from "@/store/cartStore";
import { useCheckoutStore } from "@/store/checkoutStore";
import { getPricing } from "@/store/priceStore";

const Card = ({ item, onRemove, onQtyChange }) => {
  const quantity = item.quantity || 1;

  return (
    <div className="group relative grid grid-cols-12 gap-4 py-6 border-b border-gray-100 last:border-0 items-center">
      <div className="col-span-12 sm:col-span-6 flex gap-4 items-center">
        <div className="w-24 h-24 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain p-2 group-hover:scale-110 duration-500"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h4 className="font-medium text-gray-900 line-clamp-1">
            {item.title}
          </h4>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            {item.brand} • {item.category}
          </p>
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-400 hover:text-red-600 text-sm flex items-center gap-1 mt-1 transition-colors"
          >
            <FaTrashCan size={12} /> Remove
          </button>
        </div>
      </div>

      <div className="col-span-4 sm:col-span-2 text-center sm:text-left">
        <p className="text-xs text-gray-400 mb-1 uppercase sm:hidden">Price</p>
        <p className="font-medium text-gray-700">${item.price.toFixed(2)}</p>
      </div>

      <div className="col-span-4 sm:col-span-2 flex flex-col items-center sm:items-start gap-1">
        <p className="text-xs text-gray-400 mb-1 uppercase sm:hidden">Qty</p>
        <div className="flex items-center border border-gray-200 rounded-full px-2 py-1 bg-gray-50">
          <button
            className="p-1 text-gray-400 hover:text-black transition-colors"
            onClick={() => onQtyChange(item.id, Math.max(1, quantity - 1))}
          >
            <FaMinus size={12} />
          </button>
          <span className="px-3 font-medium text-sm w-8 text-center">
            {quantity}
          </span>
          <button
            className="p-1 text-gray-400 hover:text-black transition-colors"
            onClick={() => onQtyChange(item.id, quantity + 1)}
          >
            <FaPlus size={12} />
          </button>
        </div>
      </div>

      <div className="col-span-4 sm:col-span-2 text-right">
        <p className="text-xs text-gray-400 mb-1 uppercase sm:hidden">Total</p>
        <p className="font-bold text-gray-900">
          ${(item.price * quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

const Page = () => {
  const cart = useCartStore((state) => state.cart);
  const userInfo = useCheckoutStore((state) => state.userInfo);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);

  const delivery = userInfo.delivery || "standard";
  const { cartTotal, discount } = getPricing(cart);

  const total = cartTotal  - discount;

  return (
    <section className="bg-gray-50 min-h-screen ">
      <Breadcrumb text="Shopping Cart" />

      <Container className="py-5 md:py-10">
        <div className="flex flex-col lg:flex-row gap-4 xl:gap-8">
          <div className="w-full lg:w-[65%]">
            <div className="flex justify-between items-end mb-6 border-b pb-4 border-gray-200">
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Your Cart</h2>
                <p className="text-gray-500 text-sm mt-1">
                  {cart.length} items in your bag
                </p>
              </div>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-sm font-medium text-red-500 hover:text-red-700 underline underline-offset-4 transition-all"
                >
                  Clear All
                </button>
              )}
            </div>

            <div className="bg-white rounded shadow-sm border border-gray-100 px-6">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <Card
                    key={item.id}
                    item={item}
                    onRemove={removeFromCart}
                    onQtyChange={updateQuantity}
                  />
                ))
              ) : (
                <div className="py-20 text-center text-gray-400">
                  Your cart is currently empty.
                  <br />
                  <Link
                    href="/"
                    className="text-black font-semibold hover:underline transition-all"
                  >
                    Continue Shopping
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="w-full lg:w-[35%]">
            <div className="sticky top-24 flex flex-col gap-6">
              <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Apply Coupon
                </h4>
                <div className="flex gap-2 p-1 border border-gray-200 rounded-xl focus-within:border-black transition-all">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="bg-transparent pl-3 flex-grow outline-none text-sm"
                  />
                  <button className="bg-black text-white text-xs font-bold px-5 py-2.5 rounded-lg hover:bg-gray-800 transition-colors uppercase tracking-wider">
                    Apply
                  </button>
                </div>
              </div>

              <div className="bg-white p-6 rounded shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">
                  Order Summary
                </h3>

                <div className="flex flex-col gap-4 border-b pb-6 text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-medium text-gray-900">
                      ${cartTotal.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span className="font-medium">-${discount.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center py-6">
                  <span className="text-lg font-bold">Total Amount</span>
                  <span className="text-2xl font-black text-gray-900">
                    ${total > 0 ? total.toFixed(2) : "0.00"}
                  </span>
                </div>

                <Link href="/checkout">
                  <button className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-primary hover:scale-[1.02] active:scale-95 duration-300 shadow-lg shadow-gray-200">
                    Checkout Now
                  </button>
                </Link>

                <p className="text-center text-xs text-gray-400 mt-4 px-4 leading-relaxed">
                  Shipping and taxes calculated at checkout. Free shipping on
                  orders over $200.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
