import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MessageIcon from "@material-ui/icons/Message";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
import b1 from "./image/b1.png";
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
    src: "https://cdn.shopify.com/s/files/1/0518/1898/7676/files/donner_lesson-pc_1600x.jpg?v=1625472118",
    alt: "banner1",
  },
  {
    id: 2,
    src: <b1 />,
    alt: "banner2",
  },
  {
    id: 3,
    src: "https://cdn.shopify.com/s/files/1/0518/1898/7676/files/donner_lesson-pc_1600x.jpg?v=1625472118",
    alt: "banner3",
  },
  {
    id: 4,
    src: "",
    alt: "banner4",
  },
  {
    id: 5,
    src: "https://cdn.shopify.com/s/files/1/0518/1898/7676/files/donner_lesson-pc_1600x.jpg?v=1625472118",
    alt: "banner5",
  },
];
