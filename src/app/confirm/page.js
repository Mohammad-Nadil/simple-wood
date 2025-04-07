"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Card = () => {
  return (
    <div className=" card border-b border-[#bdbdbd]/50 grid grid-cols-5 gap-2 py-1.5 sm:py-3">
      <div className="image">
        <img
          src="/example.png"
          alt="Chair"
          className="w-full h-full aspect-square object-contain "
        />
      </div>
      <div className="info col-span-3 flex flex-col gap-y-1.5 md:gap-y-3 ">
        <p className="font-semibold text-xs md:text-sm ">
          Simple Wood Chair Collection
        </p>
        <div className="flex items-center gap-x-2">
          <p>Qty : </p>
          <p>1</p>
        </div>
      </div>
      <p className=" price font-semibold text-nowrap">$ 45.00</p>
    </div>
  );
};

const page = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handlePlaceOrder = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside modal
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const deliveryData = {
    city: "Dhaka",
    town: "Uttara",
    street: "House 23, Road 15",
    fullAddress: "House 23, Road 15, Uttara, Dhaka",
    phone: "0123456789",
    email: "example@gmail.com",
    deliveryMethod: "Express Delivery ($15)",
  };

  const billingData = {
    subtotal: 135,
    tax: 10,
    deliveryCharge: 15,
    total: 160,
  };

  return (
    <section>
      <Breadcrumb text="Confirm Order" />
      <Container className=" flex flex-col-reverse gap-5 sm:grid sm:grid-cols-2 xl:grid-cols-3  w-full py-5 xl:pb-14">
        <div className="DeliveryInfo xl:col-span-2 px-2 flex flex-col gap-y-4 ">
          <h3 className="text-xl font-semibold border-b  border-[#bdbdbd]/60 pb-2">
            Delivery & Contact Information
          </h3>
          <div className="text-sm flex flex-col gap-y-2  text-gray-700 pb-2 border-b border-[#bdbdbd]/50">
            <p>
              <strong>City:</strong> {deliveryData.city}
            </p>
            <p>
              <strong>Town:</strong> {deliveryData.town}
            </p>
            <p>
              <strong>Street:</strong> {deliveryData.street}
            </p>
            <p>
              <strong>Full Address:</strong> {deliveryData.fullAddress}
            </p>
            <p>
              <strong>Phone:</strong> {deliveryData.phone}
            </p>
            <p>
              <strong>Email:</strong> {deliveryData.email}
            </p>
            <p>
              <strong>Delivery Method:</strong> {deliveryData.deliveryMethod}
            </p>
          </div>
          <div className="couponCode flex  gap-2 md:gap-5 text-sm sm:text-base text-nowrap">
            <input
              type="text"
              placeholder="Discount Code"
              className="border p-1 md:p-2 w-2/3 md:w-1/3 outline-none"
            />
            <button className="bg-black text-white px-3 md:px-4 py-1 sm:py-2 hover:bg-gray-800 hover:scale-110 duration-300 ">
              Apply Discount
            </button>
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

        <div className="orderSummary flex items-start justify-center">
          <div className="bg-secondary shadow-md rounded-lg py-4 px-2 lg:px-6 flex flex-col md:justify-center gap-y-4 w-full max-w-md">
            <h3 className="text-xl font-semibold border-b pb-2 border-[#bdbdbd]">
              Order Summary
            </h3>
            <p className="text-gray-500 text-xs md:text-sm">
              3 items in your cart
            </p>

            <div className="flex flex-col gap-y-1">
              <Card />
              <Card />
              <Card />
            </div>

            <div className="pt-3 border-t text-sm text-gray-700">
              <p className="flex justify-between">
                <span>Subtotal:</span> <span>${billingData.subtotal}</span>
              </p>
              <p className="flex justify-between">
                <span>Tax:</span> <span>${billingData.tax}</span>
              </p>
              <p className="flex justify-between">
                <span>Delivery:</span>{" "}
                <span>${billingData.deliveryCharge}</span>
              </p>
              <p className="flex justify-between font-semibold text-base mt-2">
                <span>Total:</span> <span>${billingData.total}</span>
              </p>
            </div>
          </div>
        </div>
      </Container>
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div ref={modalRef} className="bg-white rounded-xl p-6 w-[90%] max-w-sm shadow-lg text-center space-y-4">
            <h2 className="text-xl font-semibold text-green-600">
              Order Placed!
            </h2>
            <p className="text-gray-700">
              Thank you for your order. You'll receive a confirmation email
              shortly.
            </p>
            <button
              onClick={closeModal}
              className="mt-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary/80 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default page;
