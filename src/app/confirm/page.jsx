"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { getPricing } from "@/store/priceStore";
import { useCartStore } from "@/store/cartStore";
import { toast } from "react-hot-toast";
import { useCheckoutStore } from "@/store/checkoutStore";
import { useRouter } from "next/navigation";

const Card = ({ item }) => {
  return (
    <div className=" card border-b border-[#bdbdbd]/50 grid grid-cols-5 gap-2 py-1.5 sm:py-3">
      <div className="image">
        <img
          src={item?.image || item.thumbnail || "/example.png"}
          alt={item?.title}
          className="w-full h-full aspect-square object-contain "
        />
      </div>

      <div className="info col-span-3 flex flex-col gap-y-1.5 md:gap-y-3 ">
        <p className="font-semibold text-xs md:text-sm ">{item?.title}</p>

        <div className="flex items-center gap-x-2">
          <p>Qty : </p>
          <p>{item?.quantity || 1}</p>
        </div>
      </div>

      <p className=" price font-semibold text-nowrap">
        $ {(item?.price * (item?.quantity || 1)).toFixed(2)}
      </p>
    </div>
  );
};

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);
  const router = useRouter();

  const cart = useCartStore((state) => state.cart);
  const buyNowProduct = useCartStore((state) => state.buyNowProduct);
  const activeCart = buyNowProduct ? [buyNowProduct] : cart;
  const clearCart = useCartStore((state) => state.clearCart);

  const { userInfo } = useCheckoutStore();

  const { cartTotal, tax, discount, delivery } = getPricing(
    activeCart,
    userInfo.delivery,
  );

  const total = cartTotal - discount + tax + delivery;

  const handlePlaceOrder = () => {
    if (cart.length === 0 && !buyNowProduct) {
      toast.error("Cart is empty");
      return;
    }

    setShowModal(true);
    clearCart();
    toast.success("Order placed successfully!");
  };

  const closeModal = () => setShowModal(false);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section>
      <Breadcrumb text="Confirm Order" />

      <Container className=" flex flex-col-reverse gap-5 sm:grid sm:grid-cols-2 xl:grid-cols-3  w-full py-5 xl:pb-14">
        {/* DELIVERY INFO (unchanged design) */}
        <div className="DeliveryInfo xl:col-span-2 px-2 flex flex-col gap-y-4 ">
          <h3 className="text-xl font-semibold border-b  border-[#bdbdbd]/60 pb-2">
            Delivery & Contact Information
          </h3>

          <div className="text-sm flex flex-col gap-y-2  text-gray-700 pb-2 border-b border-[#bdbdbd]/50">
            <p>
              <strong>Name: </strong> {userInfo.firstName} {userInfo.lastName}
            </p>

            <p>
              <strong>City:</strong> {userInfo.city}
            </p>
            <p>
              <strong>Town:</strong> {userInfo.town}
            </p>
            <p>
              <strong>Street:</strong> {userInfo.fullAddress}
            </p>
            <p>
              <strong>Full Address:</strong> {userInfo.fullAddress}
            </p>
            <p>
              <strong>Phone:</strong> {userInfo.phone}
            </p>
            <p>
              <strong>Email:</strong> {userInfo.email}
            </p>
            <p>
              <strong>Delivery Method:</strong>{" "}
              {userInfo.delivery === "express"
                ? "Express Delivery ($15)"
                : "Standard Delivery ($5)"}
            </p>
          </div>

          <div className="flex justify-between pt-4">
            <Link
              href="/checkout"
              className="py-2 px-4 border hover:border-primary border-secondary hover:scale-105 duration-200 text-sm"
            >
              Back
            </Link>

            <button
              onClick={handlePlaceOrder}
              className="bg-primary text-white py-2 px-4 hover:bg-primary/70 hover:scale-105 duration-200 text-sm"
            >
              Place Order
            </button>
          </div>
        </div>

        {/* ORDER SUMMARY */}
        <div className="orderSummary flex items-start justify-center">
          <div className="bg-secondary shadow-md rounded-lg py-4 px-2 lg:px-6 flex flex-col md:justify-center gap-y-4 w-full max-w-md">
            <h3 className="text-xl font-semibold border-b pb-2 border-[#bdbdbd]">
              Order Summary
            </h3>

            <p className="text-gray-500 text-xs md:text-sm">
              {activeCart.length} items in your cart
            </p>

            <div className="flex flex-col gap-y-1">
              {activeCart.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </div>

            <div className="pt-3 border-t text-sm text-gray-700">
              <p className="flex justify-between">
                <span>Subtotal:</span>
                <span>${cartTotal.toFixed(2)}</span>
              </p>

              <p className="flex justify-between">
                <span>Tax:</span>
                <span>${tax.toFixed(2)}</span>
              </p>

              <p className="flex justify-between">
                <span>Delivery:</span>
                <span>${delivery.toFixed(2)}</span>
              </p>

              <p className="flex justify-between">
                <span>Discount:</span>
                <span>${discount.toFixed(2)}</span>
              </p>

              <p className="flex justify-between font-semibold text-base mt-2">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* MODAL (unchanged UI) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div
            ref={modalRef}
            className="bg-white rounded-xl p-6 w-[90%] max-w-sm shadow-lg text-center space-y-4"
          >
            <h2 className="text-xl font-semibold text-green-600">
              Order Placed!
            </h2>

            <p className="text-gray-700">
              Thank you for your order. You'll receive a confirmation email
              shortly.
            </p>

            <Link
              href="/"
              onClick={closeModal}
              className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition"
            >
              Close
            </Link>
          </div>
        </div>
      )}
    </section>
  );
};

export default Page;
