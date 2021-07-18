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
import fender11 from "./image/FENDER/Fender-Made-in-Japan-Traditional-50s-Telecaster.png"; //!!!

/* import fender11 from "./image/FENDER/"; */
import gibson1 from "./image/GIBSON/Gibson-Orianthi-SJ200.png";
import gibson2 from "./image/GIBSON/Gibson-ES335-Hollowbody.png";
import gibson3 from "./image/GIBSON/Gibson-1957-SJ200.png";
import gibson4 from "./image/GIBSON/Gibson-Kirk-Douglas.png";
import gibson5 from "./image/GIBSON/Gibson-Murphy-Labs-61-ES335.png";
import gibson6 from "./image/GIBSON/Gibson-Murphy-Labs-64.png";
import gibson7 from "./image/GIBSON/Gibson-Murphy-Labs-63.png";
import gibson8 from "./image/GIBSON/Gibson-Murphy-57.png";
import gibson9 from "./image/GIBSON/Gibson-Murphy-64.png";
import gibson10 from "./image/GIBSON/Gibson-ES-345.png";

const guitarData = [
  {
    id: "guitar50",
    brand: "gibson",
    name: "Gibson Orianthi SJ200 Acoustic Guitar In Cherry",
    color: "red",
    price: "11200",
    image: { url: gibson1 },
  },
  {
    id: "guitar51",
    brand: "gibson",
    name: "Gibson ES335 Hollowbody Electric Guitar in Satin Vintage Natural",
    color: "yellow",
    price: "4100",
    image: { url: gibson2 },
  },
  {
    id: "guitar52",
    brand: "gibson",
    name: "Gibson 1957 SJ200 Acoustic Guitar in Antique Natural",
    color: "brown",
    price: "10100",
    image: { url: gibson3 },
  },
  {
    id: "guitar53",
    brand: "gibson",
    name: "Gibson Kirk Douglas SG Electric Guitar In Ebony",
    color: "black",
    price: "4755",
    image: { url: gibson4 },
  },
  {
    id: "guitar54",
    brand: "gibson",
    name: "Gibson Murphy Labs 61 ES335 Ultra Light Aged Electric Guitar In 60's Cherry",
    color: "red",
    price: "9998",
    image: { url: gibson5 },
  },
  {
    id: "guitar55",
    brand: "gibson",
    name: "Gibson Murphy Labs 64 Trini Lopez Standard Ultra LIght Electric Guitar In Aged Ebony",
    color: "black",
    price: "11900",
    image: { url: gibson6 },
  },
  {
    id: "guitar56",
    brand: "gibson",
    name: "Gibson Murphy Labs 63 Firebird Ultra Light Aged Electric Guitar In Pelham Blue",
    color: "blue",
    price: "9800",
    image: { url: gibson7 },
  },
  {
    id: "guitar57",
    brand: "gibson",
    name: "Gibson Murphy 57 Les Paul Goldtop Electric Guitar Ultra Light Aged",
    color: "gold",
    price: "8590",
    image: { url: gibson8 },
  },
  {
    id: "guitar58",
    brand: "gibson",
    name: "Gibson Murphy 64 SG Std Maestro Ultra Light in Aged Red",
    color: "red",
    price: "8400",
    image: { url: gibson9 },
  },
  {
    id: "guitar59",
    brand: "gibson",
    name: "Gibson ES-345 Vintage Burst Electric Guitar",
    color: "brown",
    price: "5600",
    image: { url: gibson10 },
  },
  /* {
    id: "guitar50",
    brand: "gibson",
    name: "",
    color: "",
    price: "",
    image: { url: gibson1 },
  }, */
  {
    id: "guitar1",
    brand: "Yamaha",
    name: "Yamaha Revstar RS320BS Electric Guitar - Black Steel",
    color: "Black",
    price: "280",
    image: { url: yamaha1 },
  },
  {
    id: "guitar2",
    brand: "Yamaha",
    name: "Yamaha Revstar RS320RC Electric Guitar - Red Copper",
    color: "red",
    price: "500",
    image: { url: yamaha2 },
  },
  {
    id: "guitar3",
    brand: "Yamaha",
    name: "Yamaha SA2200 Semi - Hollowbody Electric Guitar in Violin Sunburst",
    color: "brown",
    price: "2750",
    image: { url: yamaha3 },
  },
  {
    id: "guitar4",
    brand: "Yamaha",
    name: "Yamaha Revstar RS502TBG Electric Guitar - Bowden Green",
    color: "green",
    price: "950",
    image: { url: yamaha4 },
  },
  {
    id: "guitar5",
    brand: "Yamaha",
    name: "Yamaha Pacifica 611VFM Electric Translucent Black",
    color: "black",
    price: "930", //$729
    image: { url: yamaha5 },
  },
  {
    id: "guitar6",
    brand: "Yamaha",
    name: "Yamaha Revstar RS820CR Electric Guitar in Brushed Teal Blue",
    color: "",
    price: "1320", //1175
    image: { url: yamaha6 },
  },
  {
    id: "guitar7",
    brand: "Yamaha",
    name: "Yamaha Revstar RS720B Electric Guitar with Bigsby in Vintage Japanese Denim",
    color: "blue",
    price: "1020", //1139
    image: { url: yamaha7 },
  },
  {
    id: "guitar8",
    brand: "Yamaha",
    name: "Yamaha Revstar RS620 Electric Guitar - Snake Eye Green",
    color: "green",
    price: "920", //889
    image: { url: yamaha8 },
  },
  {
    id: "guitar9",
    brand: "Yamaha",
    name: "Yamaha Revstar RS420FB Electric Guitar - Factory Blue",
    color: "blue",
    price: "580", //629
    image: { url: yamaha9 },
  },
  {
    id: "guitar10",
    brand: "Yamaha",
    name: "Yamaha Revstar RS420 Electric Guitar - Maya Gold",
    color: "brown",
    price: "595",
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
    price: "3999",
    image: { url: fender1 },
  },
  {
    id: "guitar101",
    brand: "fender",
    name: "Fender American Original '50s Stratocaster with Maple in White Blonde",
    color: "white",
    price: "3100",
    image: { url: fender2 },
  },
  {
    id: "guitar102",
    brand: "fender",
    name: "Fender American Acoustasonic Jazzmaster, Ocean Turquoise, Ebony Fingerboard",
    color: "green",
    price: "3000",
    image: { url: fender3 },
  },
  {
    id: "guitar103",
    brand: "fender",
    name: "Fender Parallel Universe Volume II Uptown Strat - Rosewood Fingerboard - Static White",
    color: "white",
    price: "2500",
    image: { url: fender4 },
  },
  {
    id: "guitar104",
    brand: "fender",
    name: "Fender Boxer Series Telecaster HH with Rosewood Fingerboard in Torino Red",
    color: "red",
    price: "2399",
    image: { url: fender5 },
  },
  {
    id: "guitar105",
    brand: "fender",
    name: "Fender Chrissie Hynde Telecaster, Rosewood Fingerboard, Ice Blue Metallic",
    color: "blue",
    price: "2050",
    image: { url: fender6 },
  },
  {
    id: "guitar106",
    brand: "Fender",
    name: "Fender vintera '50S Telecaster electric guitar",
    color: "yellow",
    price: "890",
    image: { url: fender7 },
  },
  {
    id: "guitar107",
    brand: "fender",
    name: "Fender American Performer Telecaster Hum in Vintage White",
    color: "yellow",
    price: "2015",
    image: { url: fender8 },
  },
  {
    id: "guitar108",
    brand: "fender",
    name: "Fender − Special Edition Custom Telecaster FMT HH, Laurel Fingerboard, Amber",
    color: "brown",
    price: "999",
    image: { url: fender9 },
  },
  {
    id: "guitar109",
    brand: "fender",
    name: "Fender − Jim Adkins JA-90 Telecaster Thinline, Laurel Fingerboard, Crimson Red Transparent",
    color: "red",
    price: "1210",
    image: { url: fender10 },
  },
  {
    id: "guitar110",
    brand: "fender",
    name: "Fender Made in Japan Traditional 50s Telecaster",
    color: "yellow butter scotch",
    price: "1150",
    image: { url: fender11 },
    Body: "Basswood",
    BodyFinish: "Gloss Polyester",
    ControlKnobs: "Knurled Dome",
    HardwareFinish: "Nickel/Chrome",
    NeckFinish: "Gloss Urethane",
    Pickguard: "3-Ply Black",
    PositionInlays: "Black Dot",
    BodyShape: "Telecaster",
    NeckMaterial: "Maple",
    NeckShape: "U Shape",
    FingerboardRadius: "9.5 (241 mm)",
    NumberofFrets: "21",
    StringNut: "Bone",
    NutWidth: "1.615 (41.02 mm)",
    BridgePickup: "Vintage-Style Single-Coil Tele",
    NeckPickup: "Vintage-Style Single-Coil Tele",
    Controls: "Master Volume, Master Tone",
    PickupSwitching:
      "3-Position Blade: Position 1. Bridge Pickup, Position 2. Bridge and Neck Pickups, Position 3. Neck Pickup",
    PickupConfiguration: "SS",
    Bridge:
      "3-Saddle Vintage-Style Strings-Through-Body Tele with Brass Barrel Saddles",
    TuningMachines: "Vintage-Style",
    Strings: "Nickel Plated Steel (.009-.042 Gauges)",
    CaseOrGigBag: "Gig Bag",
  } /*  {
    id: "guitar110",
    brand: "fender",
    name: "",
    color: "",
    price: ,
    image: {url: fender4 },
  }, */,
  ,
];

export default guitarData;
