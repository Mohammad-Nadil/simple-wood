"use client";
import Breadcrumb from "@/components/layer/Breadcrumb";
import Container from "@/components/layer/Container";
import Link from "next/link";
import { FaMinus, FaPlus, FaTruck, FaShieldAlt } from "react-icons/fa";
import { useCartStore } from "@/store/cartStore";
import { useCheckoutStore } from "@/store/checkoutStore";
import { useRouter } from "next/navigation";
import { getPricing } from "@/store/priceStore";
import toast from "react-hot-toast";

const Card = ({ item }) => {
  const title = item?.title || "Simple Wood Chair Collection";
  const brand = item?.brand || "SimpleWood";
  const price = item?.price || 45.0;
  const quantity = item?.quantity || 1;

  return (
    <div className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-0 group">
      <div className="relative w-16 h-16 bg-gray-50 rounded-lg overflow-hidden flex-shrink-0 border border-gray-100">
        <img
          src={item?.image || "/example.png"}
          alt={title}
          className="w-full h-full object-contain p-2 group-hover:scale-110 duration-500"
        />
      </div>

      <div className="flex-grow">
        <p className="text-[10px] uppercase tracking-widest text-primary font-bold mb-0.5">
          {brand}
        </p>

        <h4 className="font-semibold text-sm text-gray-800 leading-tight line-clamp-1">
          {title}
        </h4>

        <div className="flex items-center justify-between mt-1">
          <p className="text-xs text-gray-500">
            Qty: <span className="font-medium text-gray-900">{quantity}</span>
          </p>

          <p className="font-bold text-gray-900 text-sm">
            ${(price * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

const Page = () => {
  const router = useRouter();

  const cart = useCartStore((state) => state.cart);
  const buyNowProduct = useCartStore((state) => state.buyNowProduct);
  const activeCart = buyNowProduct ? [buyNowProduct] : cart;
  const { userInfo, setUserInfo } = useCheckoutStore();
  const { cartTotal, tax, discount, delivery } = getPricing(
    activeCart,
    userInfo.delivery,
  );
  const total = cartTotal - discount + tax + delivery;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUserInfo({
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userInfo.firstName || !userInfo.city || !userInfo.phone) {
      toast.error("Please fill in all required fields");
      return;
    }

    router.push("/confirm");
  };

  return (
    <section className="bg-gray-50 min-h-screen">
      <Breadcrumb text="Checkout" />

      <Container className="py-10">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="w-full lg:w-[60%] bg-white rounded-2xl shadow-sm border border-gray-100 p-4 md:p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-primary/10 p-3 rounded-full text-primary">
                <FaTruck size={20} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Delivery Details
                </h3>
                <p className="text-gray-500 text-sm">
                  Where should we send your order?
                </p>
              </div>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    onChange={handleChange}
                    value={userInfo.firstName}
                    required
                    type="text"
                    placeholder="e.g. John"
                    className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/30"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Last Name *
                  </label>
                  <input
                    name="lastName"
                    onChange={handleChange}
                    value={userInfo.lastName}
                    required
                    type="text"
                    placeholder="e.g. Doe"
                    className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/30"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    City *
                  </label>
                  <input
                    name="city"
                    onChange={handleChange}
                    value={userInfo.city}
                    required
                    type="text"
                    placeholder="e.g. Dhaka"
                    className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/30"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Town *
                  </label>
                  <input
                    name="town"
                    onChange={handleChange}
                    value={userInfo.town}
                    required
                    type="text"
                    placeholder="e.g. Gulshan"
                    className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/30"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700 ml-1">
                  Full Address *
                </label>
                <input
                  name="fullAddress"
                  onChange={handleChange}
                  value={userInfo.fullAddress}
                  required
                  type="text"
                  placeholder="House no, road name, etc."
                  className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/30"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Phone Number *
                  </label>
                  <input
                    name="phone"
                    onChange={handleChange}
                    value={userInfo.phone}
                    required
                    type="text"
                    placeholder="+880..."
                    className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/30"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-medium text-gray-700 ml-1">
                    Email Address
                  </label>
                  <input
                    name="email"
                    onChange={handleChange}
                    value={userInfo.email}
                    type="email"
                    placeholder="example@mail.com"
                    className="w-full p-3 rounded-xl border border-gray-200 outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all bg-gray-50/30"
                  />
                </div>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wider">
                  Shipping Method
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className="relative flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                    <input
                      type="radio"
                      name="delivery"
                      value="standard"
                      checked={userInfo.delivery === "standard"}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-bold text-gray-900">
                        Standard Delivery
                      </p>
                      <p className="text-xs text-gray-500">3-5 Business Days</p>
                    </div>
                    <span className="ml-auto font-bold text-sm text-gray-900">
                      $5.00
                    </span>
                  </label>

                  <label className="relative flex items-center p-4 border rounded-xl cursor-pointer hover:bg-gray-50 transition-all has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                    <input
                      type="radio"
                      name="delivery"
                      value="express"
                      checked={userInfo.delivery === "express"}
                      onChange={handleChange}
                      className="w-4 h-4 text-primary focus:ring-primary border-gray-300"
                    />
                    <div className="ml-3">
                      <p className="text-sm font-bold text-gray-900">
                        Express Delivery
                      </p>
                      <p className="text-xs text-gray-500">Next Day Delivery</p>
                    </div>
                    <span className="ml-auto font-bold text-sm text-gray-900">
                      $15.00
                    </span>
                  </label>
                </div>
              </div>

              <div className="flex items-center justify-between pt-8 border-t border-gray-100 mt-6">
                <Link
                  href="/cart"
                  className="text-sm font-bold text-gray-500 hover:text-black transition-colors underline underline-offset-4 uppercase tracking-tighter"
                >
                  Return to Cart
                </Link>
                <button
                  onClick={handleSubmit}
                  href="/confirm"
                  type="submit"
                  className="bg-black text-white px-10 py-4 rounded-xl font-bold hover:bg-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform active:scale-95 uppercase tracking-wider text-sm"
                >
                  Confirm Order
                </button>
              </div>
            </form>
          </div>

          <div className="w-full lg:w-[40%] lg:sticky lg:top-24">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 bg-gray-50/50 border-b border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">
                  Order Summary
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  {cart.length} item{cart.length !== 1 ? "s" : ""} in your bag
                </p>
              </div>

              <div className="p-6 max-h-[400px] overflow-y-auto">
                {activeCart.length > 0 ? (
                  activeCart.map((item) => <Card key={item.id} item={item} />)
                ) : (
                  <p className="text-center text-gray-500 text-sm mt-4">
                    Your cart is empty
                  </p>
                )}
              </div>

              <div className="p-6 bg-gray-50/30 space-y-3">
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Discount</span>
                  <span className="font-bold text-gray-900">
                    - ${discount.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Tax</span>
                  <span className="font-bold text-gray-900">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600 text-sm">
                  <span>Shipping Fee</span>
                  <span className="font-bold text-gray-900">
                    ${delivery.toFixed(2)}
                  </span>
                </div>

                <div className="flex justify-between items-center pt-4 border-t border-gray-200 mt-2">
                  <span className="text-lg font-bold text-gray-900">
                    Grand Total
                  </span>
                  <span className="text-2xl font-black text-gray-900">
                    ${total.toFixed(2)}
                  </span>
                </div>

                <div className="mt-6 flex items-center gap-2 justify-center text-[10px] text-gray-400 uppercase tracking-[2px] py-2">
                  <FaShieldAlt className="text-green-500" />
                  Secure Checkout Guaranteed
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Page;
