import blog1 from "../image/Blog/blog1.png";
import blog2 from "../image/Blog/blog2.png";
import blog3 from "../image/Blog/blog3.png";
import blog4 from "../image/Blog/blog4.png";

import fender from "../image/brand/fender.svg";
import yamaha from "../image/brand/yamaha.svg";
import gibson2 from "../image/brand/gibson-logo.png";

export const postData = [
  {
    id: "a",
    title: " Mexican Fender / Squier Strats: The Mid 1990s Boom",
    des: "After a pretty grim start, Fender’s Mexican guitar production initially remained somewhat muted within the overall range on the UK market.",
    url: "/blog/mexican-fender",
    img: { url: blog1 },
  },
  {
    id: "b",
    title: "Fender USA '52 Telecaster Reissue (1992)",
    des: "   Whilst the subject of this retrospective was made twenty years ago, it replicates an instrument built in the dim and distant post-war decade, a full sixty years ago.",
    url: "/blog/fender-usa52",
    img: { url: blog2 },
  },
  {
    id: "c",
    title: "Gibson Les Paul Pro Deluxe 1976 to 1982",
    des: "By the mid ‘eighties I’d seen and heard a heck of a lot of Les Pauls – mostly on the local live music scene, and probably as many copies as genuine Gibsons.",
    url: "#",
    img: { url: blog3 },
  },
  {
    id: "a",
    title: "Yamaha SG 2000 - Japan's First Megastar Guitar",
    des: " That's how seasoned guitar reviewer David Lawrenson summed up the Yamaha SG 2000 in its early 1980s heyday.",
    url: "#",
    img: { url: blog4 },
  },
];

export const brandLogo = [
  {
    id: "gibson",
    name: "gibson",
    img: { url: gibson2 },
  },

  {
    id: "fender",
    name: "fender",
    img: { url: fender },
  },
  {
    id: "yamaha",
    name: "yamaha",
    img: { url: yamaha },
  },
];
