import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MessageIcon from "@material-ui/icons/Message";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import BookIcon from "@material-ui/icons/Book";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
// banner img
import banner1 from "./image/banner1.png";
import banner2 from "./image/banner2.png";
import banner3 from "./image/banner3.png";
import banner4 from "./image/banner4.png";
import banner5 from "./image/banner5.png";
// guitar img
import fender21 from "./image/FENDER/Fender-Parallel-Universe-II-Tele-Mágico.png";
import fender33 from "./image/FENDER/Fender−Newporter-Player.png";
import fender25 from "./image/FENDER/Fender-Boxer-Series-Telecaster-HH.png";

import gibson61 from "./image/GIBSON/Gibson-Slash-Les-Paul-Standard.png";
import gibson62 from "./image/GIBSON/Gibson-Custom-Shop-1968-Les-Paul-Standard.png";
import gibson63 from "./image/GIBSON/Gibson-Les-Paul-Special-Tribute-Humbucker.png";
import yamaha8 from "./image/YAMAHA/Yamaha-RS620.png";
import yamaha5 from "./image/YAMAHA/Yamaha-611VFM.png";

export const data = [
  {
    page: "prodcuts",
    links: [
      { label: "GIBSON", icon: <ArrowForwardIcon />, url: "./products" },
      { label: "FENDER", icon: <ArrowForwardIcon />, url: "./products" },
      { label: "YAMAHA", icon: <ArrowForwardIcon />, url: "./products" },
    ],
  },
  {
    page: "blog",
    links: [{ label: "blog", icon: <BookIcon />, url: "./blog" }],
  },
  {
    page: "contact",
    links: [{ label: "Contact Us", icon: <MessageIcon />, url: "./contact" }],
  },
  {
    page: "cart",
    links: [
      { label: "cart", icon: <ShoppingCartIcon />, url: "./cart" },
      /*       { label: "wishlist", icon: <FavoriteIcon />, url: "./cart" },
       */
    ],
  },
  {
    page: "FAQ",
    links: [{ label: "FAQ", icon: <LiveHelpIcon />, url: "./faq" }],
  },
];

export const bannerImg = [
  {
    id: 1,
    img: { url: banner1 },
    alt: "banner1",
  },
  {
    id: 2,

    img: { url: banner2 },
    alt: "banner2",
  },
  {
    id: 3,

    img: { url: banner3 },
    alt: "banner3",
  },
  {
    id: 4,

    img: { url: banner4 },
    alt: "banner4",
  },
  {
    id: 5,

    img: { url: banner5 },
    alt: "banner5",
  },
];

export const guitarImg = [
  {
    id: 100,
    img: { url: fender21 },
    alt: "fender guitar",
    url: "./products/fender21",
  },
  {
    id: 101,
    img: { url: fender33 },
    alt: "fender guitar",
    url: "./products/fender33",
  },
  {
    id: 102,
    img: { url: fender25 },
    alt: "yamaha guitar",
    url: "./products/fender25",
  },
  {
    id: 103,
    img: { url: gibson61 },
    alt: "gibson guitar",
    url: "./products/gibson61",
  },
  {
    id: 104,
    img: { url: gibson62 },
    alt: "gibson guitar",
    url: "./products/gibson62",
  },
  {
    id: 105,
    img: { url: gibson63 },
    alt: "gibson guitar",
    url: "./products/gibson63",
  },
  {
    id: 106,
    img: { url: yamaha8 },
    alt: "yamaha guitar",
    url: "./products/yamaha8",
  },
  {
    id: 107,
    img: { url: yamaha5 },
    alt: "yamaha guitar",
    url: "./products/yamaha5",
  },
];

export const footerInfo = [
  {
    id: 20,
    title: "policy",
    name: [
      { label: "Shipping policy", url: "./shipping-policy" },
      { label: "Return policy", url: "./return-policy" },
      { label: "Privacy policy", url: "./privacy-policy" },
      { label: "Term of Service", url: "./term-of-service" },
      { label: "Click and Collect", url: "./click-of-collect" },
      { label: "Covid-19 policy", url: "./covid19-policy" },
    ],
  },
  {
    id: 21,
    title: "Trading Hours",
    name: [
      { label: "Monday: 10am - 6pm" },
      { label: "Tuesday: 10am - 6pm" },
      { label: "Wednesday: 10am - 6pm" },
      { label: "Thursday: 10am - 6pm" },
      { label: "Friday: 10am - 6pm" },
      { label: "Saturday: 10am - 5pm" },
      { label: "Closed Public Holidays" },
    ],
  },
  {
    id: 22,
    title: "address",
    name: [
      { label: "10 Bellerine Street, GEELONG VIC 3220" },
      { label: "ph: 0423235600" },
      { label: "Email: harro.mr.guitar@gmail.com" },
    ],
  },
];

export const faq = [
  {
    id: 60,
    question: "Where are you located?",
    answer:
      "We’re in Clayton, Melbourne! Address is Shop 4, 2167-2181 Princes Highway, Clayton, Victoria 3168.",
  },
  {
    id: 61,
    question: "What are your trading hours?",
    answer:
      "We’re currently open 10am-5pm, 7 days a week. You can call anytime on (03) 9546 0188, email info@skymusic.com.au or chat with us via the Live Chat on our website during business hours.",
  },
  {
    id: 62,
    question: "When can I expect my online order to arrive?",
    answer:
      "Shipping Australia wide varies from 1-7 days or more depending on your location. We endeavour to have orders dispatched within 1-2 business days, so you will receive order confirmation immediately, and order tracking will follow in 1-2 days. From there you can track your package with the assigned courier.Full shipping and delivery policy is available here.",
  },
  {
    id: 63,
    question: "Do you do repairs and restrings?",
    answer:
      "We’re currently not accepting any new repairs or restrings due to a backlog of existing repairs that take priority over new work. There’s currently no known date we’ll start accepting repairs and restrings again.",
  },
  {
    id: 64,
    question: "Do you offer lay-by?",
    answer:
      "We do! We offer lay-by that requires a 20% deposit on the advertised price of an item and payment must be completed within three months from the sale. Pre-order and special order items require a 20% deposit and payment to be completed within three of the item arriving in-store. We cannot accept layby online, so please call or e-mail to secure your new instrument!",
  },
  {
    id: 65,
    question: "Do you offer payment options like AfterPay, Zip or Studio19?",
    answer:
      "Yes! We’re partnered with Zip and Studio19. More info is available here.",
  },
  {
    id: 66,
    question: "Can I return my item?",
    answer:
      "We have a few option available for returns due to a variety of reasons such as change of mind, warranty and service.",
  },
  {
    id: 67,
    question: "Do you accept online and phone orders?",
    answer:
      "We absolutely do! We ship most online orders over $100 for free Australia-wide, and orders are dispatched within 1-2 days business days. Dispatching involves checking and safely packing your order as well as booking it via a courier or Australia Post. Tracking will be available in 2-3 business days in most cases. Please check your Spam or Junk folder regularly, and contact us if you haven't heard anything within 5 business days. All of our online and phone orders go through an O.K. check by our warehouse staff before leaving the store. Guitars and basses are inspected and set-up to ensure everything is working as it should, as per the inspection card included with your order.",
  },
];
