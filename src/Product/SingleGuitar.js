import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useGlobalContext } from "../context";

import guitarData from "../guitarData";

const SingleGuitar = () => {
  const { closeSubmenu } = useGlobalContext();
  const { id } = useParams();

  const [name, setName] = useState("default name");
  const [image, setImage] = useState({});
  const [brand, setBrand] = useState("default brand");
  const [color, setColor] = useState("default color");
  const [price, setPrice] = useState("default price");
  const [Body, setBody] = useState("default Body");
  const [BodyFinish, setBodyFinish] = useState("default BodyFinish");
  const [ControlKnobs, setControlKnobs] = useState("default ControlKnobs");
  const [HardwareFinish, setHardwareFinish] = useState(
    "default HardwareFinish"
  );
  const [NeckFinish, setNeckFinish] = useState("default NeckFinish");
  const [Pickguard, setPickguard] = useState("default Pickguard");
  const [PositionInlays, setPositionInlays] = useState(
    "default PositionInlays"
  );
  const [BodyShape, setBodyShape] = useState("default BodyShape");
  const [NeckMaterial, setNeckMaterial] = useState("default NeckMaterial");
  const [NeckShape, setNeckShape] = useState("default NeckShape");
  const [FingerboardRadius, setFingerboardRadius] = useState(
    "default FingerboardRadius"
  );
  const [NumberofFrets, setNumberofFrets] = useState("default NumberofFrets");
  const [StringNut, setStringNut] = useState("default StringNut");
  const [NutWidth, setNutWidth] = useState("default NutWidth");
  const [BridgePickup, setBridgePickup] = useState("default BridgePickup");
  const [NeckPickup, setNeckPickup] = useState("default NeckPickup ");
  const [Controls, setControls] = useState("default Controls");
  const [PickupSwitching, setPickupSwitching] = useState(
    "default PickupSwitching"
  );
  const [PickupConfiguration, setPickupConfiguration] = useState(
    "default PickupConfiguration"
  );
  const [Bridge, setBridge] = useState("default Bridge");
  const [TuningMachines, setTuningMachines] = useState(
    "default TuningMachines"
  );
  const [Strings, setStrings] = useState("default Strings");
  const [CaseOrGigBag, setCaseOrGigBag] = useState("default CaseOrGigBag");

  useEffect(() => {
    const eachGuitar = guitarData.find((guitar) => guitar.id === id);
    setName(eachGuitar.name);
    setBrand(eachGuitar.brand);
    setColor(eachGuitar.color);
    setPrice(eachGuitar.price);
    setImage(eachGuitar.image);
    setBody(eachGuitar.Body);
    setBodyFinish(eachGuitar.BodyFinish);
    setControlKnobs(eachGuitar.ControlKnobs);
    setHardwareFinish(eachGuitar.HardwareFinish);
    setNeckFinish(eachGuitar.NeckFinish);
    setPickguard(eachGuitar.Pickguard);
    setPositionInlays(eachGuitar.PositionInlays);
    setBodyShape(eachGuitar.BodyShape);
    setNeckMaterial(eachGuitar.NeckMaterial);
    setNeckShape(eachGuitar.NeckShape);
    setFingerboardRadius(eachGuitar.FingerboardRadius);
    setNumberofFrets(eachGuitar.NumberofFrets);
    setStringNut(eachGuitar.StringNut);
    setNutWidth(eachGuitar.NutWidth);
    setBridgePickup(eachGuitar.BridgePickup);
    setNeckPickup(eachGuitar.NeckPickup);
    setControls(eachGuitar.Controls);
    setPickupSwitching(eachGuitar.PickupSwitching);
    setPickupConfiguration(eachGuitar.PickupConfiguration);
    setBridge(eachGuitar.Bridge);
    setTuningMachines(eachGuitar.TuningMachines);
    setStrings(eachGuitar.Strings);
    setCaseOrGigBag(eachGuitar.CaseOrGigBag);
  }, []);

  return (
    <>
      <section className="single-guitar-hero" onMouseOver={closeSubmenu}>
        <div className="single-guitar-center" key={id}>
          <h3 className="single-guitar-title">{name}</h3>
          <img src={image.url} alt={name} />
          <div className="single-guitar-info">
            <h3>Guitar Infomation</h3>
            <p>Brand: {brand}</p>
            <p>Color: {color}</p>
            <p>Body : {Body}</p>
            <p>BodyFinish: {BodyFinish}</p>
            <p>ControlKnobs: {ControlKnobs}</p>
            <p>HardwareFinish: {HardwareFinish}</p>
            <p>NeckFinish: {NeckFinish}</p>
            <p>Pickguard: {Pickguard}</p>
            <p>PositionInlays: {PositionInlays}</p>
            <p>BodyShape: {BodyShape}</p>
            <p>NeckMaterial: {NeckMaterial}</p>
            <p>NeckShape: {NeckShape}</p>
            <p>FingerboardRadius: {FingerboardRadius}</p>
            <p>NumberofFrets: {NumberofFrets}</p>
            <p>StringNut: {StringNut}</p>
            <p>NutWidth: {NutWidth}</p>
            <p>BridgePickup: {BridgePickup}</p>
            <p>NeckPickup: {NeckPickup}</p>
            <p>Controls: {Controls}</p>
            <p>PickupSwitching: {PickupSwitching}</p>
            <p>PickupConfiguration: {PickupConfiguration}</p>
            <p>Bridge: {Bridge}</p>
            <p>TuningMachines: {TuningMachines}</p>
            <p>Strings: {Strings}</p>
            <p>CaseOrGigBag: {CaseOrGigBag}</p>
            <Link to="/products">
              <button className="single-guitar-btn">Return</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SingleGuitar;
