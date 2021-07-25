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
import yamaha11 from "./image/YAMAHA/Yamaha-BBNE2.png";
import yamaha12 from "./image/YAMAHA/Yamaha-TRBX605.png";
import yamaha13 from "./image/YAMAHA/Yamaha-RSP20CR.png";
import yamaha14 from "./image/YAMAHA/Yamaha-APX600.png";

/* fender guitar */
import fender21 from "./image/FENDER/Fender-Parallel-Universe-II-Tele-Mágico.png";
import fender22 from "./image/FENDER/Fender-American-Original-50s-Stratocaster.png";
import fender23 from "./image/FENDER/Fender-American-Acoustasonic-Jazzmaster.png";
import fender24 from "./image/FENDER/Fender-Parallel-Universe-Volume-II-Uptown Strat.png";
import fender25 from "./image/FENDER/Fender-Boxer-Series-Telecaster-HH.png";
import fender26 from "./image/FENDER/Fender-Chrissie-Hynde-Telecaster.png";
import fender27 from "./image/FENDER/Fender-vintera-50S-Telecaster.png";
import fender28 from "./image/FENDER/Fender-America-Performer-Telecaster-Hum.png";
import fender29 from "./image/FENDER/Fender-Special-Edition-Custom-Telecaster-FMT-HH.png";
import fender30 from "./image/FENDER/Fender−Jim-Adkins-JA-90-Telecaster-Thinline.png";
import fender31 from "./image/FENDER/Fender-Made-in-Japan-Traditional-50s-Telecaster.png"; //!!!
import fender32 from "./image/FENDER/Fender−Newporter-Player.png";
import fender33 from "./image/FENDER/Fender-Cory-Wong-Stratocaster-with-Rosewood-Fingerboard.png";

import gibson51 from "./image/GIBSON/Gibson-Orianthi-SJ200.png";
import gibson52 from "./image/GIBSON/Gibson-ES335-Hollowbody.png";
import gibson53 from "./image/GIBSON/Gibson-1957-SJ200.png";
import gibson54 from "./image/GIBSON/Gibson-Kirk-Douglas.png";
import gibson55 from "./image/GIBSON/Gibson-Murphy-Labs-61-ES335.png";
import gibson56 from "./image/GIBSON/Gibson-Murphy-Labs-64.png";
import gibson57 from "./image/GIBSON/Gibson-Murphy-Labs-63.png";
import gibson58 from "./image/GIBSON/Gibson-Murphy-57.png";
import gibson59 from "./image/GIBSON/Gibson-Murphy-64.png";
import gibson60 from "./image/GIBSON/Gibson-ES-345.png";
import gibson61 from "./image/GIBSON/Gibson-Slash-Les-Paul-Standard.png";
import gibson62 from "./image/GIBSON/Gibson-Custom-Shop-1968-Les-Paul-Standard.png";
import gibson63 from "./image/GIBSON/Gibson-Les-Paul-Special-Tribute-Humbucker.png";

const guitarData = [
  {
    id: "gibson51",
    brand: "gibson",
    name: "Gibson Orianthi SJ200 Acoustic Guitar In Cherry",
    color: "red",
    price: "11200",
    image: { url: gibson51 },
  },
  {
    id: "gibson52",
    brand: "gibson",
    name: "Gibson ES335 Hollowbody Electric Guitar in Satin Vintage Natural",
    color: "yellow",
    price: "4100",
    image: { url: gibson52 },
  },
  {
    id: "gibson53",
    brand: "gibson",
    name: "Gibson 1957 SJ200 Acoustic Guitar in Antique Natural",
    color: "brown",
    price: "10100",
    image: { url: gibson53 },
  },
  {
    id: "gibson54",
    brand: "gibson",
    name: "Gibson Kirk Douglas SG Electric Guitar In Ebony",
    color: "black",
    price: "4755",
    image: { url: gibson54 },
  },
  {
    id: "gibson55",
    brand: "gibson",
    name: "Gibson Murphy Labs 61 ES335 Ultra Light Aged Electric Guitar In 60's Cherry",
    color: "red",
    price: "9998",
    image: { url: gibson55 },
  },
  {
    id: "gibson56",
    brand: "gibson",
    name: "Gibson Murphy Labs 64 Trini Lopez Standard Ultra LIght Electric Guitar In Aged Ebony",
    color: "black",
    price: "11900",
    image: { url: gibson56 },
  },
  {
    id: "gibson57",
    brand: "gibson",
    name: "Gibson Murphy Labs 63 Firebird Ultra Light Aged Electric Guitar In Pelham Blue",
    color: "blue",
    price: "9800",
    image: { url: gibson57 },
  },
  {
    id: "gibson58",
    brand: "gibson",
    name: "Gibson Murphy 57 Les Paul Goldtop Electric Guitar Ultra Light Aged",
    color: "gold",
    price: "8590",
    image: { url: gibson58 },
  },
  {
    id: "gibson59",
    brand: "gibson",
    name: "Gibson Murphy 64 SG Std Maestro Ultra Light in Aged Red",
    color: "red",
    price: "8400",
    image: { url: gibson59 },
  },
  {
    id: "gibson60",
    brand: "gibson",
    name: "Gibson ES-345 Vintage Burst Electric Guitar",
    color: "brown",
    price: "5600",
    image: { url: gibson60 },
  },
  {
    id: "gibson61",
    brand: "gibson",
    name: "Gibson Slash Les Paul Standard Limited Edition in Vermillion Burst",
    color: "red",
    price: "4850",
    image: { url: gibson61 },
  },
  {
    id: "gibson62",
    brand: "gibson",
    name: "Gibson Custom Shop 1968 Les Paul Standard Goldtop Reissue",
    color: "yellow",
    price: "9800",
    image: { url: gibson62 },
  },
  {
    id: "gibson63",
    brand: "gibson",
    name: "Gibson Les Paul Special Tribute Humbucker in Ebony Satin",
    color: "black",
    price: "1359",
    image: { url: gibson63 },
  },
  {
    id: "yamaha1",
    brand: "Yamaha",
    name: "Yamaha Revstar RS320BS Electric Guitar - Black Steel",
    color: "Black",
    price: "280",
    image: { url: yamaha1 },
  },
  {
    id: "yamaha2",
    brand: "Yamaha",
    name: "Yamaha Revstar RS320RC Electric Guitar - Red Copper",
    color: "red",
    price: "500",
    image: { url: yamaha2 },
  },
  {
    id: "yamaha3",
    brand: "Yamaha",
    name: "Yamaha SA2200 Semi - Hollowbody Electric Guitar in Violin Sunburst",
    color: "brown",
    price: "2750",
    image: { url: yamaha3 },
  },
  {
    id: "yamaha4",
    brand: "Yamaha",
    name: "Yamaha Revstar RS502TBG Electric Guitar - Bowden Green",
    color: "green",
    price: "950",
    image: { url: yamaha4 },
  },
  {
    id: "yamaha5",
    brand: "Yamaha",
    name: "Yamaha Pacifica 611VFM Electric Translucent Black",
    color: "black",
    price: "930", //$729
    image: { url: yamaha5 },
  },
  {
    id: "yamaha6",
    brand: "Yamaha",
    name: "Yamaha Revstar RS820CR Electric Guitar in Brushed Teal Blue",
    color: "",
    price: "1320", //1175
    image: { url: yamaha6 },
  },
  {
    id: "yamaha7",
    brand: "Yamaha",
    name: "Yamaha Revstar RS720B Electric Guitar with Bigsby in Vintage Japanese Denim",
    color: "blue",
    price: "1020", //1139
    image: { url: yamaha7 },
  },
  {
    id: "yamaha8",
    brand: "yamaha",
    name: "Yamaha Revstar RS620 Electric Guitar - Snake Eye Green",
    color: "green",
    price: "920", //889
    image: { url: yamaha8 },
  },
  {
    id: "yamaha9",
    brand: "Yamaha",
    name: "Yamaha Revstar RS420FB Electric Guitar - Factory Blue",
    color: "blue",
    price: "580", //629
    image: { url: yamaha9 },
  },
  {
    id: "yamaha10",
    brand: "Yamaha",
    name: "Yamaha Revstar RS420 Electric Guitar - Maya Gold",
    color: "brown",
    price: "595",
    image: { url: yamaha10 },
  },
  {
    id: "yamaha11",
    brand: "Yamaha",
    name: "Yamaha BBNE2 Nathan East Bass Black 5 String",
    color: "black",
    price: "4952",
    image: { url: yamaha11 },
  },
  {
    id: "yamaha12",
    brand: "Yamaha",
    name: "Yamaha TRBX605 5 String Active-Passic Bass Guitar - Translucent Black",
    color: "black",
    price: "998",
    image: { url: yamaha12 },
  },
  {
    id: "yamaha13",
    brand: "Yamaha",
    name: "Yamaha - Revstar RSP20CR Electric Guitar in Rusty Rat",
    color: "gray",
    price: "2345",
    image: { url: yamaha13 },
  },
  {
    id: "yamaha14",
    brand: "Yamaha",
    name: "Yamaha APX600 Acoustic Electric Guitar - Oriental Blue Burst",
    color: "green",
    price: "595",
    image: { url: yamaha14 },
  },
  {
    id: "fender21",
    brand: "fender",
    name: "Fender Parallel Universe II Tele Mágico - Maple Fingerboard - Transparent Surf Green",
    color: "green",
    price: "3999",
    image: { url: fender21 },
  },
  {
    id: "fender22",
    brand: "fender",
    name: "Fender American Original '50s Stratocaster with Maple in White Blonde",
    color: "white",
    price: "3100",
    image: { url: fender22 },
  },
  {
    id: "fender23",
    brand: "fender",
    name: "Fender American Acoustasonic Jazzmaster, Ocean Turquoise, Ebony Fingerboard",
    color: "green",
    price: "3000",
    image: { url: fender23 },
  },
  {
    id: "guitar24",
    brand: "fender",
    name: "Fender Parallel Universe Volume II Uptown Strat - Rosewood Fingerboard - Static White",
    color: "white",
    price: "2500",
    image: { url: fender24 },
  },
  {
    id: "fender25",
    brand: "fender",
    name: "Fender Boxer Series Telecaster HH with Rosewood Fingerboard in Torino Red",
    color: "red",
    price: "2399",
    image: { url: fender25 },
  },
  {
    id: "fender26",
    brand: "fender",
    name: "Fender Chrissie Hynde Telecaster, Rosewood Fingerboard, Ice Blue Metallic",
    color: "blue",
    price: "2050",
    image: { url: fender26 },
  },
  {
    id: "fender27",
    brand: "Fender",
    name: "Fender vintera '50S Telecaster electric guitar",
    color: "yellow",
    price: "890",
    image: { url: fender27 },
  },
  {
    id: "fender28",
    brand: "fender",
    name: "Fender American Performer Telecaster Hum in Vintage White",
    color: "yellow",
    price: "2015",
    image: { url: fender28 },
  },
  {
    id: "fender29",
    brand: "fender",
    name: "Fender − Special Edition Custom Telecaster FMT HH, Laurel Fingerboard, Amber",
    color: "brown",
    price: "999",
    image: { url: fender29 },
  },
  {
    id: "fender30",
    brand: "fender",
    name: "Fender − Jim Adkins JA-90 Telecaster Thinline, Laurel Fingerboard, Crimson Red Transparent",
    color: "red",
    price: "1210",
    image: { url: fender30 },
  },
  {
    id: "fender31",
    brand: "fender",
    name: "Fender Made in Japan Traditional 50s Telecaster, Maple Fingerboard, Butterscotch Blonde",
    color: "yellow butter scotch",
    price: "1150",
    image: { url: fender31 },
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
  },
  {
    id: "fender33",
    brand: "fender",
    name: "Fender − Newporter Player, Walnut Fingerboard, Ice Blue Satin",
    color: "blue",
    price: "459",
    image: { url: fender32 },
  },
  {
    id: "fender34",
    brand: "fender",
    name: "Fender Cory Wong Stratocaster with Rosewood Fingerboard in Sapphire Blue Transparent",
    color: "blue",
    price: "3109",
    image: { url: fender33 },
  },
];

export default guitarData;
