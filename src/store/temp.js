
// This file contains temporary data for the application, such as banner items and category items.


// Importing images for banner and category items
import img1 from "../../public/banner1.png";
import img2 from "../../public/banner2.png";
import img3 from "../../public/banner3.png";
import laptops from "../../public/laptops.webp";
import smartphones from "../../public/banner/phone.jpg";
import mensShirts from "../../public/mens-shirts.webp";
import tops from "../../public/tops.webp";
import womenDresses from "../../public/womens-dresses.webp";
import car1 from "../../public/banner/car1.jpg";
import car2 from "../../public/banner/car2.jpg";
import car3 from "../../public/banner/car.webp";
import shoes1 from "../../public/banner/shoes1.jpg";
import shoes2 from "../../public/banner/shoes2.jpg";
import shoes3 from "../../public/banner/shoes3.jpg";
import watches from "../../public/banner/watches.jpg";
import watches2 from "../../public/banner/watches2.jpg";
import gadgets1 from "../../public/banner/electronic1.jpg";
import jwellery from "../../public/banner/jwellery.webp";
import bag from "../../public/banner/bags.webp";
import mens1 from "../../public/banner/mens1.jpg";
import mens2 from "../../public/banner/mens2.jpg";


// Exporting banner items and category items for use in the application
import furniture from "../../public/sofa.png";
import homeDecoration from "../../public/home-decorations.webp";
import groceries from "../../public/groceries.webp";
// import laptops from "../../public/laptops.webp";
import smartphone from "../../public/smartphones.webp";
import fragrances from "../../public/fragrances.webp";
import skincare from "../../public/skincare.jpg";
// import mensShirts from "../../public/mens-shirts.webp";
// import tops from "../../public/tops.webp";
import womensDresses from "../../public/womens-dresses.webp";








export const bannerItems = [
  {
    title: ["Furniture & Home", "Collection"],
    des: "Upgrade your home with our hand-picked furniture and decoration items.",
    img: [img1, img2, img3],
    category: "furniture",
  },
  {
    title: ["Electronics & Gadgets", "Collection"],
    des: "Explore the latest tech gadgets and electronics for work and play.",
    img: [laptops, gadgets1, smartphones],
    category: "laptops",
  },
  {
    title: ["Men's Fashion", "Collection"],
    des: "Stay stylish with our premium selection of shirts, shoes, and watches.",
    img: [mensShirts, mens1, mens2],
    category: "mens-shirts",
  },
  {
    title: ["Women's Fashion", "Collection"],
    des: "Discover elegant dresses, bags, shoes, and more for every occasion.",
    img: [bag, womenDresses, tops],
    category: "womens-dresses",
  },
  {
    title: ["Shoes & Accessories", ""],
    des: "Step out in style with our exclusive shoes, sunglasses, and more.",
    img: [shoes1, watches, shoes2],
    category: "mens-shoes",
  },
  {
    title: ["Jewelry & Watches", ""],
    des: "Add sparkle to your look with our fine jewelry and stylish watches.",
    img: [watches, watches2, jwellery],
    category: "womens-jewellery",
  },
  {
    title: ["Vehicle & Miscellaneous", ""],
    des: "From sports accessories to vehicle essentials, find it all here.",
    img: [car1, car2, car3],
    category: "vehicle",
  },
];

export const categoryItems = [
    { title: "furniture", img: furniture },
    { title: "laptops", img: laptops },
    { title: "home-decoration", img: homeDecoration },
    { title: "groceries", img: groceries },
    { title: "tops", img: tops },
    { title: "smartphones", img: smartphone },
    { title: "fragrances", img: fragrances },
    { title: "mens-shirts", img: mensShirts },
    { title: "womens-dresses", img: womensDresses },
    { title: "skin-care", img: skincare },
  ];
