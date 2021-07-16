/* yamaha guitar */
import yamaha1 from "./image/YAMAHA/Yamaha-RS320BS.png";
import yamaha2 from "./image/YAMAHA/Yamaha-RS320RC.png";
import yamaha3 from "./image/YAMAHA/Yamaha-SA2200-Semi.png";
import yamaha4 from "./image/YAMAHA/Yamaha-RS502TBG.png";
import yamaha5 from "./image/YAMAHA/Yamaha-611VFM.png";
import yamaha6 from "./image/YAMAHA/Yamaha-RS820CR.png";
import yamaha7 from "./image/YAMAHA/Yamaha-RS720B.png";
import yamaha8 from "./image/YAMAHA/Yamaha-RS620.png";
import yamaha9 from "./image/YAMAHA/Yamaha-RS420FB.png";
import yamaha10 from "./image/YAMAHA/Yamaha-RS420.png";
/* fender guitar */
import fender1 from "./image/FENDER/Fender-Parallel-Universe-II-Tele-Mágico.png";
import fender2 from "./image/FENDER/Fender-American-Original-50s-Stratocaster.png";
import fender3 from "./image/FENDER/Fender-American-Acoustasonic-Jazzmaster.png";
import fender4 from "./image/FENDER/Fender-Parallel-Universe-Volume-II-Uptown Strat.png";
import fender5 from "./image/FENDER/Fender-Boxer-Series-Telecaster-HH.png";
import fender6 from "./image/FENDER/Fender-Chrissie-Hynde-Telecaster.png";
import fender7 from "./image/FENDER/Fender-vintera-50S-Telecaster.png";
import fender8 from "./image/FENDER/Fender-America-Performer-Telecaster-Hum.png";
import fender9 from "./image/FENDER/Fender-Special-Edition-Custom-Telecaster-FMT-HH.png";
import fender10 from "./image/FENDER/Fender−Jim-Adkins-JA-90-Telecaster-Thinline.png";
/* import fender11 from "./image/FENDER/"; */

const guitarData = [
  {
    id: "guitar1",
    brand: "yamaha",
    name: "Yamaha Revstar RS320BS Electric Guitar - Black Steel",
    color: "Black",
    price: 280,
    image: { url: yamaha1 },
  },
  {
    id: "guitar2",
    brand: "yamaha",
    name: "Yamaha Revstar RS320RC Electric Guitar - Red Copper",
    color: "red",
    price: 500,
    image: { url: yamaha2 },
  },
  {
    id: "guitar3",
    brand: "yamaha",
    name: "Yamaha SA2200 Semi - Hollowbody Electric Guitar in Violin Sunburst",
    color: "brown",
    price: 2750,
    image: { url: yamaha3 },
  },
  {
    id: "guitar4",
    brand: "yamaha",
    name: "Yamaha Revstar RS502TBG Electric Guitar - Bowden Green",
    color: "green",
    price: 950,
    image: { url: yamaha4 },
  },
  {
    id: "guitar5",
    brand: "yamaha",
    name: "Yamaha Pacifica 611VFM Electric Translucent Black",
    color: "black",
    price: 930, //$729
    image: { url: yamaha5 },
  },
  {
    id: "guitar6",
    brand: "yamaha",
    name: "Yamaha Revstar RS820CR Electric Guitar in Brushed Teal Blue",
    color: "",
    price: 1320, //1175
    image: { url: yamaha6 },
  },
  {
    id: "guitar7",
    brand: "yamaha",
    name: "Yamaha Revstar RS720B Electric Guitar with Bigsby in Vintage Japanese Denim",
    color: "blue",
    price: 1020, //1139
    image: { url: yamaha7 },
  },
  {
    id: "guitar8",
    brand: "yamaha",
    name: "Yamaha Revstar RS620 Electric Guitar - Snake Eye Green",
    color: "green",
    price: 920, //889
    image: { url: yamaha8 },
  },
  {
    id: "guitar9",
    brand: "yamaha",
    name: "Yamaha Revstar RS420FB Electric Guitar - Factory Blue",
    color: "blue",
    price: 580, //629
    image: { url: yamaha9 },
  },
  {
    id: "guitar10",
    brand: "yamaha",
    name: "Yamaha Revstar RS420 Electric Guitar - Maya Gold",
    color: "brown",
    price: 595,
    image: { url: yamaha10 },
  },
  /*  {
    id: "guitar1",
    brand: "yamaha",
    name: "",
    color: "",
    price:,
    url: { yamaha1 },
  }, */
  {
    id: "guitar100",
    brand: "fender",
    name: "Fender Parallel Universe II Tele Mágico - Maple Fingerboard - Transparent Surf Green",
    color: "green",
    price: 3999,
    image: { url: fender1 },
  },
  {
    id: "guitar101",
    brand: "fender",
    name: "Fender American Original '50s Stratocaster with Maple in White Blonde",
    color: "white",
    price: 3100,
    image: { url: fender2 },
  },
  {
    id: "guitar102",
    brand: "fender",
    name: "Fender American Acoustasonic Jazzmaster, Ocean Turquoise, Ebony Fingerboard",
    color: "green",
    price: 3000,
    image: { url: fender3 },
  },
  {
    id: "guitar103",
    brand: "fender",
    name: "Fender Parallel Universe Volume II Uptown Strat - Rosewood Fingerboard - Static White",
    color: "white",
    price: 2500,
    image: { url: fender4 },
  },
  {
    id: "guitar104",
    brand: "fender",
    name: "Fender Boxer Series Telecaster HH with Rosewood Fingerboard in Torino Red",
    color: "red",
    price: 2399,
    image: { url: fender5 },
  },
  {
    id: "guitar105",
    brand: "fender",
    name: "Fender Chrissie Hynde Telecaster, Rosewood Fingerboard, Ice Blue Metallic",
    color: "blue",
    price: 2050,
    image: { url: fender6 },
  },
  {
    id: "guitar106",
    brand: "fender",
    name: "Fender vintera '50S Telecaster electric guitar",
    color: "yellow",
    price: 890,
    image: { url: fender7 },
  },
  {
    id: "guitar107",
    brand: "fender",
    name: "Fender American Performer Telecaster Hum in Vintage White",
    color: "yellow",
    price: 2015,
    image: { url: fender8 },
  },
  {
    id: "guitar108",
    brand: "fender",
    name: "Fender − Special Edition Custom Telecaster FMT HH, Laurel Fingerboard, Amber",
    color: "brown",
    price: 999,
    image: { url: fender9 },
  },
  {
    id: "guitar109",
    brand: "fender",
    name: "Fender − Jim Adkins JA-90 Telecaster Thinline, Laurel Fingerboard, Crimson Red Transparent",
    color: "red",
    price: 1210,
    image: { url: fender10 },
  } /*  {
    id: "guitar110",
    brand: "fender",
    name: "",
    color: "",
    price: ,
    url: { fender4 },
  }, {
    id: "guitar103",
    brand: "",
    name: "Gibson Custom Shop Les Paul Standard Black over Gold Aged Limited Edition Electric Guitar",
    color: "",
    price: ,
    url: { fender4 },
  }, {
    id: "guitar103",
    brand: "fender",
    name: "",
    color: "",
    price: ,
    url: { fender4 },
  }, {
    id: "guitar103",
    brand: "fender",
    name: "",
    color: "",
    price: ,
    url: { fender4 },
  }, */,
  ,
];

export default guitarData;
