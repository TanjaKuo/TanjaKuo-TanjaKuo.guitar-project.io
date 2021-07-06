import React from "react";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import MessageIcon from "@material-ui/icons/Message";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LiveHelpIcon from "@material-ui/icons/LiveHelp";
const data = [
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

export default data;
