import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MessageIcon from "@material-ui/icons/Message";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
// banner img
import banner1 from "./image/banner1.png";
import banner2 from "./image/banner2.png";
import banner3 from "./image/banner3.png";
import banner4 from "./image/banner4.png";
import banner5 from "./image/banner5.png";
// guitar img
import fender1 from "./image/fender1.png";
import fender2 from "./image/fender2.png";
import gibson3 from "./image/gibson3.png";
import gibson4 from "./image/gibson4.png";
import gibson5 from "./image/gibson5.png";
import yamaha6 from "./image/yamaha6.png";
import yamaha7 from "./image/yamaha7.png";
import yamaha8 from "./image/yamaha8.png";

export const data = [
  {
    page: "prodcuts",
    links: [
      { label: "70's guitar", icon: <ArrowForwardIcon />, url: "./products" },
      { label: "gibson", icon: <ArrowForwardIcon />, url: "./products" },
      { label: "fender", icon: <ArrowForwardIcon />, url: "./products" },
      { label: "yamaha", icon: <ArrowForwardIcon />, url: "./products" },
    ],
  },
  {
    page: "contact",
    links: [
      { label: "online consult", icon: <MessageIcon />, url: "./contact" },
    ],
  },
  {
    page: "cart",
    links: [
      { label: "cart", icon: <ShoppingCartIcon />, url: "./cart" },
      { label: "wishlist", icon: <FavoriteIcon />, url: "./cart" },
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
    /* img: {
      url: "https://cdn.shopify.com/s/files/1/0518/1898/7676/files/donner_lesson-pc_1600x.jpg?v=1625472118",
    }, */
    alt: "banner1",
  },
  {
    id: 2,
    /* img: {
      url: "https://cdn.shopify.com/s/files/1/0518/1898/7676/files/donner_lesson-pc_1600x.jpg?v=1625472118",
    }, */

    img: { url: banner2 },
    alt: "banner2",
  },
  {
    id: 3,
    /* img: {
      url: "https://cdn.shopify.com/s/files/1/0518/1898/7676/files/donner_lesson-pc_1600x.jpg?v=1625472118",
    }, */

    img: { url: banner3 },
    /*     src: "https://cdn.shopify.com/s/files/1/0518/1898/7676/files/donner_lesson-pc_1600x.jpg?v=1625472118",
     */ alt: "banner3",
  },
  {
    id: 4,
    /* img: {
      url: "https://cdn.shopify.com/s/files/1/0518/1898/7676/files/donner_lesson-pc_1600x.jpg?v=1625472118",
    }, */

    img: { url: banner4 },
    alt: "banner4",
  },
  {
    id: 5,
    /* img: {
      url: "https://cdn.shopify.com/s/files/1/0518/1898/7676/files/donner_lesson-pc_1600x.jpg?v=1625472118",
    }, */

    img: { url: banner5 },
    /*     src: "https://cdn.shopify.com/s/files/1/0518/1898/7676/files/donner_lesson-pc_1600x.jpg?v=1625472118",
     */ alt: "banner5",
  },
];

export const guitarImg = [
  {
    id: 100,
    img: { url: fender1 },
    alt: "fender guitar",
  },
  {
    id: 101,
    img: { url: fender2 },
    alt: "fender guitar",
  },
  {
    id: 102,
    img: { url: gibson3 },
    alt: "gibson guitar",
  },
  {
    id: 103,
    img: { url: gibson4 },
    alt: "gibson guitar",
  },
  {
    id: 104,
    img: { url: gibson5 },
    alt: "gibson guitar",
  },
  {
    id: 105,
    img: { url: yamaha6 },
    alt: "yamaha guitar",
  },
  {
    id: 106,
    img: { url: yamaha7 },
    alt: "yamaha guitar",
  },
  {
    id: 107,
    img: { url: yamaha8 },
    alt: "yamaha guitar",
  },
];

export const footerInfo = [
  {
    id: 20,
    title: "policy",
    name: [
      {
        label: "Shipping policy",
        label: "Refund policy",
        label: "Privacy policy",
        label: "Term of Service",
        label: "Click and Collect",
        label: "Covid-19 policy",
      },
    ],
  },
  {
    id: 21,
    title: "hours",
    name: [
      {
        label: "Monday: 10am - 6pm",
        label: "Tuesday: 10am - 6pm ",
        label: "Wednesday: 10am - 6pm",
        label: "Thursday: 10am - 6pm ",
        label: "Friday: 10am - 6pm ",
        label: "Saturday: 10am - 5pm  ",
        label: "Closed Public Holidays",
      },
    ],
  },
  {
    id: 22,
    title: "address",
    name: [
      {
        label: "10 Bellerine Street, GEELONG VIC 3220",
        label: "ph: 0423235600",
        label: "Email: harro@mr-guitar@gmail.com",
      },
    ],
  },
];
