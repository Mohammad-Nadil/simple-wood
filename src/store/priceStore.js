export const getPricing = (cart, delivery = "standard") => {
  const cartTotal = cart.reduce(
    (acc, item) => acc + item.price * (item.quantity || 1),
    0
  );

  const tax = cartTotal * 0.1;
  const discount = cartTotal > 0 ? cartTotal * 0.05 : 0;
  const deliveryFee = delivery === "express" ? 15 : 5;

  return {
    cartTotal,
    tax,
    discount,
    delivery: deliveryFee,
  };
};
